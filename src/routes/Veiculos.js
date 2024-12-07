// importação das biblioetas
const express = require('express');
const bodyParser = require('body-parser');



// função para manipulação de rotas
const app = express.Router();
const fs = require('fs'); // módulo para abrir arquivo


// requisições com JSON
app.use(bodyParser.json());

// serve os arquivos estaticos
app.use(express.static('./src/pages'));





// ---> rota GET 127.0.0.1:8080/veiculo/get
app.get('/get', (req, res) => {

  // carregar o arquivo .html para uma constante
  const arquivoHtml = fs.readFileSync('./src/pages/index.html');

  // responde com o arquivo html
  res.end(arquivoHtml);

});





// ---> rota POST http://127.0.0.1:8080/veiculo/post
app.post('/post', (req, res) => {

  const novoVeiculo = {
    nome: req.body.nome,
    fabricante: req.body.fabricante,
    ano: req.body.ano,
    combustivel: req.body.combustivel,
    cor: req.body.cor,
    preco: req.body.preco
  };

  res.status(201).send({
    mensagem: 'O veiculo foi cadastrado com sucesso.',
    dadosNovoVeiculo: novoVeiculo,
  });
});




// ---> rota PUT http://127.0.0.1:8080/veiculo/put
app.put('/put', (req, res) => {

  const novoVeiculo = {
    id: req.body.id,
    preco: req.body.preco
  };

  res.status(201).send({
    mensagem: `Os dados do veiculo (id ${novoVeiculo.id}) foram atualizados.`,
    novoPreco: novoVeiculo.preco,
  });

});



// rota para o médoto DELETE http://127.0.0.1:8080/veiculo/delete/1234
app.delete('/delete/:idVeiculo', (req, res) => {

  // obtem o id pela url
  let id = req.params.idVeiculo

  res.send(`O veículo de ID ${id} foi excluído com sucesso`);
});


module.exports = app;