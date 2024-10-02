const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain'); // Define o tipo de conteúdo para texto simples

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Bem-vindo!\n');
    } else if (req.url.startsWith('/saudacao/')) {
        // Extrai o nome da URL
        const nome = req.url.split('/')[2]; // O nome está na segunda posição da URL
        if (nome) {
            res.statusCode = 200;
            res.end(`Olá, ${nome.charAt(0).toUpperCase() + nome.slice(1)}!\n`); // Saudação personalizada
        } else {
            res.statusCode = 400; // Bad Request
            res.end('Nome não fornecido!\n');
        }
    } else if (req.url === '/sobre') {
        res.statusCode = 200;
        res.end('Eu sou um desenvolvedor apaixonado por tecnologia e programação.\n');
    } else if (req.url === '/contato') {
        res.statusCode = 200;
        res.end('Você pode me contatar pelo e-mail: exemplo@dominio.com\n');
    } else {
        res.statusCode = 404;
        res.end('Página não encontrada\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
