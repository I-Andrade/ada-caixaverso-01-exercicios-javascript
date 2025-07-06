/*

5. Crie uma função chamada juntarObjetos que 
recebe dois objetos e retorna um novo objeto 
que combina as propriedades de ambos.

*/

function juntarObjetos(obj1, obj2) {
    if (typeof obj1 !== 'object' || obj1 === null)
        throw new Error("O primeiro argumento deve ser um objeto.");
    if (typeof obj2 !== 'object' || obj2 === null)
        throw new Error("O segundo argumento deve ser um objeto.");
    
    return { ...obj1, ...obj2 };
}
// Exemplo de uso:
const objeto1 = { nome: "João", idade: 30 };
const objeto2 = { cidade: "São Paulo", profissao: "Engenheiro" };
const resultado = juntarObjetos(objeto1, objeto2);
console.log(resultado); 
// Saída: { nome: 'João', 
//          idade: 30, 
//          cidade: 'São Paulo', 
//          profissao: 'Engenheiro' 
//        }     
