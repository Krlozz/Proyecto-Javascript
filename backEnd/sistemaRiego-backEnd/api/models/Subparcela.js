/**
 * Subparcela.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    codigoSubparcela: {
      type: 'string',
      columnName: 'codigo_Subparcela',
      required: true
    },

    medidasSubparcela: {
      type: 'string',
      columnName: 'medidas_Subparcela',
      required: true
    },

    idParcela: {
      model: 'Parcela' // Modelo Papa
    },

    sensores: {
      collection: 'Sensor', // Modelo Hijo
      via: 'idSubparcela' // Nombre del Campo
    }

  },

};

