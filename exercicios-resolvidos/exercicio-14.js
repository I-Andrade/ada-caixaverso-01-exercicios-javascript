/*

14. Crie uma função chamada pararContador que interrompe o contador iniciado na
 função anterior.

*/

function contadorInterval() {
     let contador = 1;
    const intervalo = setInterval(() => {
        console.log(contador);
        contador++;
        if (contador > 10) clearInterval(intervalo);
    }, 1000);
    return intervalo; // Retorna o ID do intervalo para possível uso posterior
}

function pararContador(intervalo) {
    clearInterval(intervalo);
}

// Exemplo de uso:
const meuContador = contadorInterval();
// Aguardar 5 segundos antes de parar o contador
setTimeout(() => {  
    pararContador(meuContador);
    console.log("Contador parado.");
}, 5000);   