/**
 * Region.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreRegion: {
      type: 'string',
      columnName: 'nombre_Region',
      required: true
    },

    descripcionRegion: {
      type: 'string',
      columnName: 'descripcion_Region'
    },

    haciendas: {
      collection: 'Hacienda', // Modelo Hijo
      via: 'idRegion' // Nombre del Campo
    }

  },

};

