/*

8. Crie uma função chamada fetchData que 
faz uma solicitação HTTP usando fetch e
retorna uma promise com os dados obtidos.

*/

function fetchData(url) {
    if (typeof url !== 'string' || !url || !url.includes('.'))
        throw new Error("O argumento deve ser uma URL válida.");
    if (!/^https?:\/\//.test(url))
        throw new Error("A URL deve começar com 'http://' ou 'https://'.");

    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (!response.ok)
                    throw new Error("Network response was not ok");
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Exemplo de uso:
fetchData("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((dados) => {
        console.log(JSON.stringify(dados,null,2));

    console.log("Acima o json retornado pela API.   ^^^^^^^^^");
    })
    .catch((error) => {
        console.error("Erro ao buscar dados:", error);
    });

