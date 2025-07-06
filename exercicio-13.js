/*

 13. Crie uma função chamada contadorInterval que inicia um contador de 1 a 10 a
 cada segundo e exibe o valor no console.

*/

function contadorInterval() {
    let contador = 1;
    const intervalo = setInterval(() => {
        console.log(contador);
        contador++;
        if (contador > 10) clearInterval(intervalo);
    }, 1000);
}

// Exemplo de uso:
contadorInterval();