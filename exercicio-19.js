/*

 19. Crie uma função chamada infoPessoa que recebe um objeto com as propriedades
 nome, idade e cidade. A função deve retornar uma string formatada, como "Nome:
 [nome], Idade: [idade], Cidade: [cidade]".

*/

function infoPessoa(pessoa) {
    if (typeof pessoa !== "object" || pessoa === null)
        throw new Error("O argumento deve ser um objeto.");

    const { nome, idade, cidade } = pessoa;

    if (typeof nome !== "string" || typeof cidade !== "string" || typeof idade !== "number")
        throw new Error("Propriedades inválidas.");

    return `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`;
}

// Exemplo de uso:
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

console.log(infoPessoa(pessoa));
// Saída: "Nome: João, Idade: 30, Cidade: São Paulo"        