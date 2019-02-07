/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  login: async (req, res) => {
    const parametros = req.allParams();
    console.log(parametros,'lkjhgfd')

    var usuarioLogeado = await Usuario.find({
      cedulaUsuario: parametros.username,
      password: parametros.password,
    });

    const error = usuarioLogeado.length === 0;

    if (!error) {
      return res.ok(usuarioLogeado[0]);
    } else {
      return res.badRequest({mensaje: 'Usuario Invalido'});
    }

  }

};

