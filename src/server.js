const express  = require('express');            //importa a biblioteca do express(FRAMEWORK usado para rotas)
const mongoose = require('mongoose');           //importa a biblioteca de banco de dados MongooDb
const path     = require('path');
const cors     = require('cors');
const app      = express();                     //instancia o framework de rotas
const server   = require('http').Server(app);
const io       = require('socket.io')(server);

app.use(cors());

io.on('connection', socket => {
    console.log('ok');
    socket.on('connectRoom', box =>{
        socket.join(box);
    })
});

//Conexão ao banco de dados
mongoose.connect(
    'mongodb+srv://omnistack:poi123@cluster0-2bhu2.mongodb.net/omnistack?retryWrites=true',
    {
        useNewUrlParser: true,
    }
);

app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(express.json()); //Para usar retornos em JSON
app.use(express.urlencoded({extended: true})); // Posibilitar envios de arquivos diminuindo as urls (usava no xurl e ajax)
app.use('/files', express.static(path.resolve(__dirname,'..','temp')));
app.use(require('./routes')); //importando as rotas


server.listen(3333); //Setando a porta da aplicação



