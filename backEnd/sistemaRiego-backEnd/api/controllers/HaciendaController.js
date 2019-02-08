/**
 * HaciendaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  buscarPorNombre: async function(req, res){
    const parametros= req.allParams();

    var nombreCac = await Hacienda.find({
      nombre: {'startsWith': parametros.nombre}
    });
    return res.ok(nombreCac)
  },
  
buscarPorNombre: async function(req, res){
  const parametros= req.allParams();

  var nombreCac = await Hacienda.find({
    nombre: {'startsWith': parametros.nombre}
  });
  return res.ok(nombreCac)
},

};

