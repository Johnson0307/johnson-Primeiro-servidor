const http = require('http')

http.createServer((req, res) => {
        res.end('Servidor funcinando!')
    }).listen(3000, 'localhost', () => console.log('O servidor está rodando...'))