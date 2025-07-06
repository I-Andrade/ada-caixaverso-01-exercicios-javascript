/*

1. Crie uma função chamada somaArray que recebe 
um array de números e retorna a
soma de todos os elementos.

*/

function somaArray(numbers) {
    if (!Array.isArray(numbers)) 
        throw new Error("O argumento deve ser um array.");
    if (numbers.length === 0) 
        throw new Error("O array não pode estar vazio.");
    if (!numbers.every(num => typeof num === 'number')) 
        throw new Error("Todos os elementos do array devem ser números.");
    
    return numbers.reduce((acc, curr) => acc + curr, 0);
}


// Exemplo de uso:
const numbers = [1, 2, 3, 4, 5];
const result = somaArray(numbers);
console.log(result); // Saída: 15