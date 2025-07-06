/*

4. Crie uma função chamada contarPropriedades que recebe 
um objeto e retorna o número de propriedades no objeto.

*/

function contarPropriedades(obj) {
    if (typeof obj !== 'object' || obj === null)
        throw new Error("O argumento deve ser um objeto.");

    return Object.keys(obj).length;
}


// Exemplo de uso:
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    profissao: "Engenheiro"
};

const resultado = contarPropriedades(pessoa);
console.log(resultado); // Saída: 4