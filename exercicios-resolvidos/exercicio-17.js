/*

17. Crie uma função chamada extrairInfo que recebe um array de objetos, onde cada
 objeto contém as propriedades nome e idade. A função deve retornar um novo array
 contendo apenas as idades dos objetos.

*/

function extrairInfo(array) {
    if (!Array.isArray(array)) 
        throw new Error("O argumento deve ser um array.");
    if (array.length === 0) 
        throw new Error("O array não pode estar vazio.");
    if (!array.every(obj => typeof obj === 'object' && 'idade' in obj))
        throw new Error("Todos os elementos do array devem ser objetos com a propriedade 'idade'.");
    
    return array.map(obj => obj.idade);
}

// Exemplo de uso:
const pessoas = [
    { nome: "Alice", idade: 30 },
    { nome: "Bob", idade: 25 },
    { nome: "Charlie", idade: 35 }
];
const idades = extrairInfo(pessoas);
console.log(idades); // Saída: [30, 25, 35]     