/*

21. Crie uma função chamada informacoesLivro que recebe um objeto representando as
 informações de um livro com as propriedades titulo, autor e ano. A função deve
 desestruturar o objeto para extrair essas informações e retorná-las em uma string
 formatada como "O livro [titulo] foi escrito por [autor] em [ano]".

*/

function informacoesLivro(livro) {
    if (typeof livro !== "object" || livro === null)
        throw new Error("O argumento deve ser um objeto.");

    const { titulo, autor, ano } = livro;

    if (typeof titulo !== "string" || typeof autor !== "string" || typeof ano !== "number")
        throw new Error("Propriedades inválidas.");

    return `O livro "${titulo}" foi escrito por ${autor} em ${ano}.`;
}

// Exemplo de uso:
const livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899
};
console.log(informacoesLivro(livro));
// Saída: O livro "Dom Casmurro" foi escrito por Machado de Assis em 1899.  