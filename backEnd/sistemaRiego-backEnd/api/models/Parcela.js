/**
 * Parcela.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    medidasParcela: {
      type: 'string',
      columnName: 'medidas_Parcela',
      required: true
    },

    codigoParcela: {
      type: 'string',
      columnName: 'codigo_Parcela',
      required: true
    },

    // hacienda: {
    //   collection: 'Hacienda', // Modelo Hijo
    //   via: 'idHacienda' // Nombre del Campo
    // },

    // usuario: {
    //   collection: 'Usuario', // Modelo Hijo
    //   via: 'idUsuario' // Nombre del Campo
    // },
    //
    // idParcela: {
    //   model: 'Parcela' // Modelo Papa
    // }

  },

};

