const Box = require('../models/Box'); //importa a model de file
const File = require('../models/File'); //importa a model de file

class FileController{
    //funcao asincrona para criacao de arquivo
    async store(req, res){
        const box = await Box.findById(req.params.id);
        
        const file = await File.create({
            title: req.file.originalname,
            path: req.file.key,
        });

        box.files.push(file);
        await box.save();

        req.io.sockets.in(box._id).emit('file', file)
        return res.json(file);
    }
}

//instancia o controller e retorna ele (precisa disso para ser usando em conjunto com o require em outros arquivos)
module.exports = new FileController(); 