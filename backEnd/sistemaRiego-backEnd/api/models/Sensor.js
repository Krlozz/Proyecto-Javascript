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

    // subparcela: {
    //   collection: 'Subparcela', // Modelo Hijo
    //   via: 'idSubparcela' // Nombre del Campo
    // },
    //
    // idSensor: {
    //   model: 'Sensor' // Modelo Papa
    // }

  },

};

