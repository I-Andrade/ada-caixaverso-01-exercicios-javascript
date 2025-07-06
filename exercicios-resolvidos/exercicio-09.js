/*

9. Crie uma função chamada gerarNumeroAleatorio que 
retorna uma promise com um número aleatório 
após um atraso de 2 segundos.

*/

function gerarNumeroAleatorio() {

    return new Promise((resolve) => {
        setTimeout(() => {
            const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            resolve(numeroAleatorio);
        }, 2000);
    });
}


// Exemplo de uso:
for (let i = 0; i < 5; i++) {
    gerarNumeroAleatorio()
        .then((numero) => {
            console.log(`Número aleatório gerado: ${numero}`);
        })
        .catch((error) => {
            console.error("Erro ao gerar número aleatório:", error);
        });
} 