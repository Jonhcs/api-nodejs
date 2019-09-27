const Usuario = require('./../models/usuario')

let HomeController = {
    index: function(req, res, next) {
        res.render('index', { title: 'Express' });
    },

    usuario: function(req, res, next) {

        let usuario = new Usuario;

        res.send('Olá usuário');
    }
  
}

module.exports = HomeController;