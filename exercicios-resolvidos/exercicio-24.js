/*

24. Crie uma função chamada mesclarObjetos que aceita dois ou mais objetos como
 argumentos. A função deve mesclar esses objetos em um único objeto usando o
operador spread e retornar o objeto resultante. Em caso de conflito de propriedades,
 a última propriedade encontrada deve prevalecer.

*/

function mesclarObjetos(...objetos) {
    
    if (objetos.some(obj => typeof obj !== 'object' || obj === null))
        throw new Error("Todos os parâmetros devem ser objetos");
    if (objetos.length < 2)
        throw new Error("Pelo menos dois objetos devem ser fornecidos");

    return objetos.reduce((acumulado, objetoAtual) => {
        return { ...acumulado, ...objetoAtual };
    }, {});
}

// Exemplo de uso:
const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };
const objeto3 = { d: 5, teste: "teste" };

const resultado = mesclarObjetos(objeto1, objeto2, objeto3);
console.log(resultado); // Saída: { a: 1, b: 3, c: 4, d: 5, teste: "teste" }
