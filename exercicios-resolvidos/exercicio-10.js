/*

10. Crie uma função chamada executarAposTempo que 
recebe uma função e um tempo em milissegundos 
e a executa após o tempo especificado.

*/

function executarAposTempo(funcao, tempo) {
    if (typeof funcao !== 'function')
        throw new Error("O primeiro argumento deve ser uma função.");
    if (typeof tempo !== 'number' || tempo < 0)
        throw new Error("O segundo argumento deve ser um número positivo representando o tempo em milissegundos.");
    
    return new Promise((resolve) => {
        setTimeout(() => {
            const resultado = funcao();
            resolve(resultado);
        }, tempo);
    });
}

// Exemplo de uso:
function minhaFuncao() {
    return "Função executada após o tempo especificado!";
}

executarAposTempo(minhaFuncao, 2000)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error("Erro ao executar função:", error);
    });