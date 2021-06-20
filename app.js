//Importando o Express para nossa aplicação
const express = require('express');
//Criamos uma constante para a porta pela qual as pessoas poderão acessar o nosso servidor.
const port = 3000;
//Instanciamos uma aplicação Express. A partir de agora podemos utilizar os comandos que o Express nos fornece.
const app = express();
 //Criamos a nossa primeira rota de acesso aos nossos recursos. Uma rota diz ao nosso servidor o que 
 //deve ser executado quando alguém acessar algum endereço (especificado por nós). Neste caso, quando 
 //a pessoa acessar localhost:3000 será executada a função que envia uma resposta ao cliente (navegador) 
 //com o um título e a versão da nossa aplicação.
app.get('/', (req, res, next)=>{
    res.send({
        title:"Meu appCurriculum",
        version: "0.0.0"
    });
});

//Dizemos ao servidor para que fique "escutando" (listen) a porta (port, que é 3000) e damos um console.log 
//no terminal para dizer que está tudo OK.
app.listen(port, err =>{
    console.log(`Servidor 'LIGADO' na porta ${port}`);
});