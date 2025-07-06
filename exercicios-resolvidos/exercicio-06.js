/*

6. Crie uma função chamada encontrarPropriedade que 
recebe um objeto e uma chave e retorna o valor 
da propriedade correspondente.

*/

function encontrarPropriedade(obj, chave) {
    if (typeof obj !== 'object' || obj === null)
        throw new Error("O primeiro argumento deve ser um objeto.");
    if (typeof chave !== 'string')
        throw new Error("A chave deve ser uma string.");
    if (!Object.keys(obj).includes(chave))
        throw new Error(`A chave "${chave}" não existe no objeto.`);

    return obj[chave];
}

// Exemplo de uso:
const pessoa = { nome: "João", idade: 30, cidade: "São Paulo" };
const chave = "idade";
const resultado = encontrarPropriedade(pessoa, chave);
console.log(resultado); // Saída: 30