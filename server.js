const express = require('express');
const app = express();
const port = 3000;

// Rota para a página HTML simples
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Página Inicial</title>
            </head>
            <body>
                <h1>Bem-vindo à minha página!</h1>
                <p>Esta é uma página HTML simples.</p>
            </body>
        </html>
    `);
});

// Rota para responder com um objeto JSON
app.get('/api/data', (req, res) => {
    const dados = {
        nome: 'Seu Nome',
        idade: 30,
        ocupacao: 'Desenvolvedor'
    };
    res.json(dados);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://127.0.0.1:${port}/`);
});
