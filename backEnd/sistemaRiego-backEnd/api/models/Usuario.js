/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreUsuario: {
      type: 'string',
      columnName: 'nombre_Usuario',
      required: true
    },

    cedulaUsuario: {
      type: 'string',
      columnName: 'cedula_Usuario',
      required: true
    },

    direccionUsuario: {
      type: 'string',
      columnName: 'direccion_Usuario',
      required: true
    },

    telefonoUsuario: {
      type: 'string',
      columnName: 'telefono_Usuario',
      allowNull: true
    },

    // hacienda: {
    //   collection: 'Hacienda', // Modelo Hijo
    //   via: 'idHacienda' // Nombre del Campo
    // },
    //
    // idUsuario: {
    //   model: 'Usuario' // Modelo Papa
    // }

  },

};

