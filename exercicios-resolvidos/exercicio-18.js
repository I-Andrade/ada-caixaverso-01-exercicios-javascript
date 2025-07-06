/*

18. Crie uma função chamada separarArrays que recebe um array contendo números e
 o desestrutura em dois arrays: um contendo os números pares e outro contendo os
 números ímpares.

*/

function separarArrays(numeros) {
    if (!Array.isArray(numeros)) 
        throw new Error("O argumento deve ser um array.");
    if (numeros.length === 0) 
        throw new Error("O array não pode estar vazio.");
    if (!numeros.every(num => typeof num === 'number'))
        throw new Error("Todos os elementos do array devem ser números.");

    const pares = [];
    const impares = [];

    for (const num of numeros)
        num % 2 === 0 ? pares.push(num) : impares.push(num);

    return { pares, impares };
}

// Exemplo de uso:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(JSON.stringify(separarArrays(numeros)));