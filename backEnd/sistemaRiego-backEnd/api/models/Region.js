/**
 * Region.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreClima: {
      type: 'string',
      columnName: 'nombre_Clima',
      required: true
    },

    direccionClima: {
      type: 'string',
      columnName: 'direccion_Clima',
      required: true
    },

    // idRegion: {
    //   model: 'Region' // Modelo Papa
    // }

  },

};

