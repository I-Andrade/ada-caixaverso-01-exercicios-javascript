/*

7. Crie uma função chamada delayedPromise que 
retorna uma promise que é resolvida após um atraso de 1 segundo.

*/

function delayedPromise(valor) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(valor);
        }, 1000);
    });
}

// Exemplo de uso:
delayedPromise("Promise resolvida após 1 segundo")
    .then((resultado) => {
    console.log(resultado); 
    // Saída: "Promise resolvida após 1 segundo"
});