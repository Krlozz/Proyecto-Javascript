/**
 * Hacienda.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreHacienda: {
      type: 'string',
      columnName: 'nombre_Hacienda',
      required: true
    },

    direccionHacienda: {
      type: 'string',
      columnName: 'direccion_Hacienda',
      unique: true,
      required: true
    },
    telefonoHacienda: {
      type: 'string',
      columnName: 'telefono_Clima',
      required: true
    },

    // region: {
    //   collection: 'Region', // Modelo Hijo
    //   via: 'idRaza' // Nombre del Campo
    // },
    //
    // idHacienda: {
    //   model: 'Hacienda' // Modelo Papa
    // }

  },

};

