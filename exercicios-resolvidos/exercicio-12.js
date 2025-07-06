/*

12. Crie uma função chamada intervaloPersonalizado que 
executa uma função a cada
intervalo de tempo especificado em milissegundos.

*/

function intervaloPersonalizado(funcao, intervalo) {
    if (typeof funcao !== 'function')
        throw new Error("O primeiro argumento deve ser uma função.");

    if (typeof intervalo !== 'number' || intervalo <= 0)
        throw new Error("O segundo argumento deve ser um número positivo.");

    return setInterval(funcao, intervalo);
}

// Exemplo de uso:
function minhaFuncao() {
    console.log("Função executada a cada intervalo especificado!");
}

const interval = intervaloPersonalizado(minhaFuncao, 1);

setTimeout(() => {
    clearInterval(interval);
    console.log("Execução interrompida.");
}, 2000);