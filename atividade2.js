const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain'); // Define o tipo de conteúdo para texto simples

    if (req.url === '/') {
        res.statusCode = 200; // Código de sucesso
        res.end('Bem-vindo!\n');
    } else if (req.url === '/sobre') {
        res.statusCode = 200; // Código de sucesso
        res.end('Eu sou um desenvolvedor apaixonado por tecnologia e programacao.\n');
    } else if (req.url === '/contato') {
        res.statusCode = 200; // Código de sucesso
        res.end('Voce pode me contatar pelo e-mail: exemplo@dominio.com\n');
    } else {
        res.statusCode = 404; // Código de não encontrado
        res.end('Página não encontrada\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
