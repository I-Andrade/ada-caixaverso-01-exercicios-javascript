/*

2. Crie uma função chamada maiorNumero que recebe um 
array de números e retorna o maior número.

*/

function maxNumberArray(numbers) {
    return Math.max(...numbers);
}

// Exemplo de uso:
const numbers = [1, 2, 6, 4, 3];
const result = maxNumberArray(numbers);
console.log(result); // Saída: 6