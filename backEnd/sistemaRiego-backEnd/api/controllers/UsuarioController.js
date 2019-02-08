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

    var usuarioLogeado =await  Usuario.findOne({
      cedulaUsuario: parametros.cedulaUsuario,
      password: parametros.password,
    });

    console.log(usuarioLogeado,'looo')
    const error = usuarioLogeado.length > 0;

    if (!error) {
      return res.ok(usuarioLogeado);
    } else {
      return res.badRequest({mensaje: 'Usuario Invalido'});
    }

  }

};

