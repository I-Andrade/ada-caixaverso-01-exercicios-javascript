/*

1. Crie uma função chamada somaArray que recebe 
um array de números e retorna a
soma de todos os elementos.

*/

function somaArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}


// Exemplo de uso:
const numbers = [1, 2, 3, 4, 5];
const result = somaArray(numbers);
console.log(result); // Saída: 15