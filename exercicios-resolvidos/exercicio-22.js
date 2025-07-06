/*

22. Crie uma função chamada concatenarArrays que recebe dois ou mais arrays e os
 concatena em um único array usando o operador de spread.

*/

function concatenarArrays(...arrays) {

    if (arrays.some(arr => !Array.isArray(arr))) {
        throw new Error("Todos os parâmetros devem ser arrays");
    }

    return [].concat(...arrays);
}

// Exemplo de uso:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const resultado = concatenarArrays(array1, array2, array3);
console.log(JSON.stringify(resultado));
// Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9]