const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Bem-vindo!\n');
    } else if (req.url === '/sobre') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Eu sou um desenvolvedor apaixonado por tecnologia e programação.\n');
    } else if (req.url === '/contato') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Você pode me contatar pelo e-mail: exemplo@dominio.com\n');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Página não encontrada\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
