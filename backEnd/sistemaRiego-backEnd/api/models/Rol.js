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
      isIn: [
        'Administrador',
        'Encargado',
      ],
      defaultsTo: 'Encargado',
      columnName: 'nombre_Rol'
    },

    descripcionRol: {
      type: 'string',
      columnName: 'direccion_Rol',
      required: true
    },

    rolUsuarios: {
      collection: 'RolXUsuario', // Modelo Hijo
      via: 'idRol' // Nombre del Campo
    }

  },

};

