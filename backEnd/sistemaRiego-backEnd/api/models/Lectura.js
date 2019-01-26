/**
 * Lectura.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fechaLectura: {
      type: 'string',
      columnName: 'fecha_Lectura',
      required: true
    },

    // sensor: {
    //   collection: 'Sensor', // Modelo Hijo
    //   via: 'idSensor' // Nombre del Campo
    // },

  },

};

