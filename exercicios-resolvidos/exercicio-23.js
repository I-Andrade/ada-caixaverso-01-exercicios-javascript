/*

23. Crie uma função chamada somaNumeros que aceita um número variável de
 argumentos. A função deve calcular a soma de todos os números passados como
 argumentos e retornar o resultado.

*/

function somaNumeros(...numeros) {
    if (numeros.length === 0)
        throw new Error("Pelo menos um número deve ser fornecido");

    if (numeros.some(num => typeof num !== 'number'))
        throw new Error("Todos os parâmetros devem ser números");

    return numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
}

// Exemplo de uso:
const resultado = somaNumeros(1, 2, 3, 4, 6);
console.log(resultado); // Saída: 16