// utils.js
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1; // Gera um número entre 1 e 10
}

module.exports = gerarNumeroAleatorio; // Exporta a função
