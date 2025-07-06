/*

16. Crie uma função chamada primeiroEUltimo que recebe um array com pelo menos
 dois elementos e retorna um novo array contendo apenas o primeiro e o último
 elementos do array original.

*/

function primeiroEUltimo(array) {
    if (!Array.isArray(array)) 
        throw new Error("O argumento deve ser um array.");
    if (array.length < 2) 
        throw new Error("O array deve conter pelo menos dois elementos.");
    
    return [array[0], array[array.length - 1]];
}

// Exemplo de uso:
const resultado = primeiroEUltimo([1, 2, 3, 4, -5]);
console.log(resultado); // Saída: [1, 5]
