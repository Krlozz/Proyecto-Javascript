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

    idUsuario: {
      model: 'Usuario' // Modelo Papa
    },

    idHacienda: {
      model: 'Hacienda' // Modelo Papa
    },

    subparcelas: {
      collection: 'Subparcela', // Modelo Hijo
      via: 'idParcela' // Nombre del Campo
    }

  },

};

