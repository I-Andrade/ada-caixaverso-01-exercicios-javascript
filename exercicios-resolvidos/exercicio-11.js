/*

11. Crie uma função chamada cancelarExecucao que 
recebe um identificador de timeout e o cancela.

*/

function cancelarExecucao(timeoutId) {

    // Em Node.js, o identificador de setTimeout é um objeto, enquanto que no navegador é um número.
    if (!timeoutId || typeof timeoutId !== 'number' && typeof timeoutId !== 'object')
        throw new Error("O argumento deve ser um identificador de timeout válido.");

    clearTimeout(timeoutId);
    console.log("Execução cancelada.");
}



// Exemplo de uso:
const timeoutId = setTimeout(() => {
    console.log("Esta mensagem não será exibida.");
}, 5000);

cancelarExecucao(timeoutId);    