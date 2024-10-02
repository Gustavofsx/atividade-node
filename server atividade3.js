const http = require('http');
const gerarNumeroAleatorio = require('./utils'); // Importa o módulo

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain'); // Define o tipo de conteúdo para texto simples

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Bem-vindo!\n');
    } else if (req.url === '/sobre') {
        res.statusCode = 200;
        res.end('Eu sou um desenvolvedor apaixonado por tecnologia e programação.\n');
    } else if (req.url === '/contato') {
        res.statusCode = 200;
        res.end('Você pode me contatar pelo e-mail: exemplo@dominio.com\n');
    } else if (req.url === '/numero') {
        const numeroAleatorio = gerarNumeroAleatorio(); // Gera um número aleatório
        res.statusCode = 200;
        res.end(`Número aleatório: ${numeroAleatorio}\n`); // Responde com o número
    } else {
        res.statusCode = 404;
        res.end('Página não encontrada\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
