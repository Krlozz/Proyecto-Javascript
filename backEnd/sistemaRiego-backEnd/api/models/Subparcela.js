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

    // parcela: {
    //   collection: 'Parcela', // Modelo Hijo
    //   via: 'idParcela' // Nombre del Campo
    // },
    //
    // idSubparcela: {
    //   model: 'Subparcela' // Modelo Papa
    // }

  },

};

