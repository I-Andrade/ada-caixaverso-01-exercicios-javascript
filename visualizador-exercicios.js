const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Caminho da pasta dos exercícios
const EXERCICIOS_DIR = path.join(__dirname, 'exercicios-resolvidos');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirExercicio(conteudo, caminhoArquivo) {
           
            console.log('\n=== Conteúdo do arquivo ===\n');
            console.log(conteudo);
            console.log('\n=== Saída da execução ===\n');
            try {
                require(caminhoArquivo);
                
                //Depois de executar o arquivo, limpar o cache do require 
                //para evitar problemas com múltiplas execuções
                delete require.cache[require.resolve(caminhoArquivo)];
            } catch (e) {
                console.log('Erro ao executar o exercício:', e.message);
            }
    
}

function perguntarExercicio() {
    console.log('\n=== Visualizador de Exercícios Resolvidos ===\n');   

    rl.question('Qual exercício deseja ver? (1-24) ou digite "N" para sair: ', (input) => {

            if (input.toUpperCase() === 'N') {
                console.log('Obrigado por usar o visualizador de exercícios!');
                rl.close();
                return;
            }

            const num = parseInt(input, 10);
            if (isNaN(num) || num < 1 || num > 24) {
                console.log('Número inválido. Tente novamente.');
                perguntarExercicio();
                return;
            }
            const nomeArquivo = `exercicio-${num.toString().padStart(2, '0')}.js`;
            const caminhoArquivo = path.join(EXERCICIOS_DIR, nomeArquivo);
            fs.readFile(caminhoArquivo, 'utf8', (err, conteudo) => {
                if (err) {
                    console.log('Erro ao ler o arquivo:', err.message);
                    rl.close();
                    return;
                }
                exibirExercicio(conteudo, caminhoArquivo);
                console.log(`\n=== Exercício ${num} exibido com sucesso! ===\n`);
                console.log('\n=== Aguarde alguns segundos para continuar, pois alguns exercicios exibem os resultados lentamente. ===\n');
                let time = 2000;
                if (num === 13)
                    time = 10500; // Aumenta o tempo de espera para exercícios que usam contadores
                if (num === 14)
                    time = 5500; // Aumenta o tempo de espera para exercícios que usam contadores
                setTimeout(() => {
                    perguntarExercicio();
                }, time);
            });
        });
    }

perguntarExercicio();