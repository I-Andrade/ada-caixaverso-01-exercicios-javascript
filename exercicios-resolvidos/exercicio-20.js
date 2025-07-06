/*

20. Crie uma função chamada desestruturarUsuario que recebe um objeto com as
 propriedades id, nome e email e retorna um novo objeto contendo apenas as
 propriedades id e email.

*/

function desestruturarUsuario(usuario) {
    if (typeof usuario !== "object" || usuario === null)
        throw new Error("O argumento deve ser um objeto.");

    const { id, email } = usuario;

    if (typeof id !== "number" || typeof email !== "string")
        throw new Error("Propriedades inválidas.");

    return { id, email };
}

// Exemplo de uso:
const usuario = {
    id: 1,
    nome: "Maria",
    email: "maria@example.com"
};

console.log(desestruturarUsuario(usuario));
// Saída: { id: 1, email: "maria@example.com" }