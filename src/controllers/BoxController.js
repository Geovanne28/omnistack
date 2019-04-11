const Box = require('../models/Box'); //importa a model de pastas

class BoxController{
    //funcao asincrona para criacao de pasta
    async store(req, res){
        
        // const box = await Box.create({title: req.body.title});  //cria uma pasta no banco
        const box = await Box.create(req.body);  //cria uma pasta no banco
        return res.json(box); //retorna as informações da pasta para o cliente
    }

    //funcao asincrona para criacao de pasta
    async show(req, res){
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: {sort: {createdAt: -1}}
        });  //cria uma pasta no banco
        return res.json(box); //retorna as informações da pasta para o cliente
    }
}

module.exports = new BoxController(); //instancia o controller e retorna ele (precisa disso para ser usando em conjunto com o require em outros arquivos)