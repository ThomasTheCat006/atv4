// importação da biblioteca Express
// para instalar rodo o comando: npm install express
const express = require('express')

// criação de um app Express
const app = express();

// importação das rotas
const veiculosRotas = require('./src/routes/Veiculos');

// definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 8080;

// rota raiz 
app.get('/', (req, res) => {
  res.send('Esta é a raiz do servidor.')
})

// utilizar as rotas
app.use('/veiculo', veiculosRotas);


// rodar a aplicação
app.listen(port, hostname, console.log('Servidor rodando...'));