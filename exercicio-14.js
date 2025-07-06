/*

14. Crie uma função chamada pararContador que interrompe o contador iniciado na
 função anterior.

*/

import { exercicio13ContadorInterval } from './exercicio-13.js';

function pararContador(intervalo) {
    clearInterval(intervalo);
}

// Exemplo de uso:
const meuContador = exercicio13ContadorInterval(); // Importado do exercício 13

// Aguardar 5 segundos antes de parar o contador
setTimeout(() => {  
    pararContador(meuContador);
    console.log("Contador parado.");
}, 5000);   