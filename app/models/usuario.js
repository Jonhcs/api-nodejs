const db = require('./../../config/db.js');

var Usuario = function () {
    this.id = 0;
    this.nome = '',
    this.login = '',
    this.senha = '',
    this.email = '',

    this.salvar = function() {
        if( this.id === 0, this.id === '', this.id === undefined) {
            //TODO: insert banco
            if (this.nome == '') {
                console.log('[MODELO:USER]Dados obrigatórios');
                return;
            }
            if (this.login == '') {
                console.log('[MODELO:USER]Dados obrigatórios');
                return;
            }
            if (this.senha == '') {
                console.log('[MODELO:USER]Dados obrigatórios');
                return;
            }
            let query = "INSERT INTO cms.usuario (nome, login, senha, email) VALUES ('"+ this.nome +"', '"+ this.login +"', '"+ this.senha +"', '"+ this.email +"');";

            db.cnn.exec(query, function (rows, err) {
                if (err != undefined) {
                    console.log("Erro ao incluir dados");
                    return;
                }else {
                    console.log("Usuário incluído com sucesso");
                    return;
                }
            });
        }
        else {
            //TODO: atualizar no banco
        }
    };

};

module.exports = Usuario;