/*

2. Crie uma função chamada maiorNumero que recebe um 
array de números e retorna o maior número.

*/

function maiorNumero(numbers) {
    if (!Array.isArray(numbers)) 
        throw new Error("O argumento deve ser um array.");
    if (numbers.length === 0) 
        throw new Error("O array não pode estar vazio.");
    if (!numbers.every(num => typeof num === 'number')) 
        throw new Error("Todos os elementos do array devem ser números.");

    return Math.max(...numbers);
}

// Exemplo de uso:
const numbers = [1, 2, 6, 4, 3];
const result = maiorNumero(numbers);
console.log(result); // Saída: 6