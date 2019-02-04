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
      required: true,
      unique: true
    },

    passwordUsuario: {
      type: 'string',
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

    rolesUsuarios: {
      collection: 'RolXUsuario', // Modelo Hijo
      via: 'idUsuario' // Nombre del Campo
    },

    idHacienda: {
      model: 'Hacienda' // Modelo Papa
    },

    parcelas: {
      collection: 'Parcela', // Modelo Hijo
      via: 'idUsuario' // Nombre del Campo
    },


  },

};

