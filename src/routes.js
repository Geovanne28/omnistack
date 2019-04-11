const express      = require('express');          //importa a biblioteca do express(FRAMEWORK usado para rotas)
const routes       = express.Router();            // Chama a classe de rotas da biblioteca
const multer       = require('multer');           // Chama a classe de rotas da biblioteca
const multerConfig = require('./config/multer');  // Chama a classe de rotas da biblioteca

//Controller das pastas
const BoxController = require('./controllers/BoxController'); // Importa o controller das pastas
const FileController = require('./controllers/FileController'); // Importa o controller dos arquivos

// cria a tota para criacao de pastas por isso POSt
routes.post('/boxes',BoxController.store); 
routes.get('/boxes/:id',BoxController.show); 

// cria a tota para criacao de pastas por isso POSt
routes.post(
    '/boxes/:id/files',
    multer(multerConfig).single('file'),
    FileController.store
);


module.exports = routes; //exporta todas as rotas para o arquivo principal