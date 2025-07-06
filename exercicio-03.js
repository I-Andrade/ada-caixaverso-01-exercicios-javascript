/*

3. Crie uma função chamada mediaArray que recebe 
um array de números e retorna a média dos valores.

*/

function mediaArray(numbers) {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    return total == 0 ? 0 : total / numbers.length;
}

// Exemplo de uso:
const numbers = [1, 2, 6, 4, 3];
const result = mediaArray(numbers);
console.log(result); // Saída: 3.2