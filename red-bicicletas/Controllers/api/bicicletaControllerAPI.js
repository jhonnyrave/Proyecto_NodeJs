var Bicicleta = require('../../Models/bicicleta');

exports.bicicleta_list = function(req, res){
    res.status(200).json({
       bicicletas: Bicicleta.allBicis  
    });
}

exports.bicicleta_create = function(req, res){
    var bici = new Bicicleta(req.body.id,req.body.color,req.body.modelo);
    bici.ubicacion = [req.body.lat,req.body.log];
    
    Bicicleta.add(bici);

    res.status(200).json({
       bicicletas: bici  
    });
}

exports.bicicleta_delete = function(req, res){
    Bicicleta.removeById(req.body.id);
    
    res.status(204).send();
      
}

