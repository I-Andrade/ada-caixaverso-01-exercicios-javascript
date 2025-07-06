/*

3. Crie uma função chamada mediaArray que recebe 
um array de números e retorna a média dos valores.

*/

function mediaArray(numbers) {
    if (!Array.isArray(numbers)) 
        throw new Error("O argumento deve ser um array.");
    if (numbers.length === 0) 
        throw new Error("O array não pode estar vazio.");
    if (!numbers.every(num => typeof num === 'number')) 
        throw new Error("Todos os elementos do array devem ser números.");

    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    return total / numbers.length;
}

// Exemplo de uso:
const numbers = [1, 2, 6, 4, 3];
const result = mediaArray(numbers);
console.log(result); // Saída: 3.2