/**
 * Sensor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    codigoSensor: {
      type: 'string',
      columnName: 'codigo_Sensor',
      required: true
    },

    idSubparcela: {
      model: 'Subparcela' // Modelo Papa
    },

    lecturas: {
      collection: 'Lectura', // Modelo Hijo
      via: 'idSensor' // Nombre del Campo
    }

  },

};

