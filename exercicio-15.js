/*

15. Crie uma função chamada gerarNumerosAleatorios que 
gera números aleatórios a cada 500 milissegundos e os exibe no console.

*/

function gerarNumerosAleatorios() {
    return setInterval(() => console.log(Math.floor(Math.random() * 100)), 500);
}

// Exemplo de uso:
const intervalo = gerarNumerosAleatorios();