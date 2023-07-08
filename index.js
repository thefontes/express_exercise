const express = require('express');
const app = express();
const porta = 3000;

app.set('view engine', 'ejs');
app.get('/', function (requisicao, resposta){
    resposta.render("menu");
});
app.listen(porta, () => {
    console.log("Servidor rodando na porta: " + porta)
});
app.get('/usuario', function (requisicao, resposta){
    resposta.render("formusuario");
});
app.get('/formget', function (requisicao, resposta){
    const usuario = requisicao.query.usuario;
    const senha = requisicao.query.senha;
    const pessoa = {usuario: usuario, senha: senha}
    resposta.render('formgetresposta', { pessoa });
});

app.get('/livro', function (requisicao, resposta){
    resposta.render('formlivro');
});

app.use(express.urlencoded({extended: true}));
app.post('/formpost', function (requisicao, resposta){
    const titulo = requisicao.body.titulo;
    const autor = requisicao.body.autor;
    console.log(`Recebido titulo e autor: ${titulo} - ${autor}`);
    resposta.redirect('/livro');
});

app.get('/json', function (requisicao, resposta){
    resposta.render('formjson');
});

app.use(express.json());
app.post('/json', function (requisao, resposta){
    console.log(requisao.body);
    resposta.json(requisao.body);
});