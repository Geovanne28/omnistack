const multer = require('multer'); //Trabalhar com envio de arquivos
const path   = require('path'); // Location of files
const crypto = require('crypto'); //hash

module.exports = {
    dest   : path.resolve(__dirname,'..','..','temp'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname,'..','..','temp'));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16,( (err, hash) => {
                if(err) 
                    cb(err);
                
                file.key = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, file.key);
            }))
        }

    })
}