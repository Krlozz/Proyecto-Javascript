/**
 * Rol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreRol: {
      type: 'string',
      columnName: 'nombre_Rol',
      required: true
    },

    direccionRol: {
      type: 'string',
      columnName: 'direccion_Rol',
      required: true
    },

    // idRol: {
    //   model: 'Rol' // Modelo Papa
    // }

  },

};

