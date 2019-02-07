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
    descripcion: {
      type: 'string',
      columnName: 'descripcion',
      required: true
    },

    idSensor: {
      model: 'Sensor' // Modelo Papa
    },

  },

};

