'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Produtos', [{
         nome: 'Protese Dentaria',
         codigo: 235762,
         id_lote: 5541,
         createdAt: new Date(),
         updatedAt: new Date()
      },{
         nome: 'Aparelho ortognatico',
         codigo: 235893,
         id_lote: 5553,
         createdAt: new Date(),
         updatedAt: new Date()
      },{
         nome: 'Expansor Palatino',
         codigo: 239751,
         id_lote: 5579,
         createdAt: new Date(),
         updatedAt: new Date()
      },{
         nome: 'Expansor Palatino',
         codigo: 239751,
         id_lote: 5595,
         createdAt: new Date(),
         updatedAt: new Date()
      },{
         nome: 'Instrumental Odontológico',
         codigo: 273515,
         id_lote: 5623,
         createdAt: new Date(),
         updatedAt: new Date()
      },{
         nome: 'Instrumental Odontológico',
         codigo: 273515,
         id_lote: 5641,
         createdAt: new Date(),
         updatedAt: new Date()
      },{
         nome: 'Aparelho ortognatico',
         codigo: 235893,
         id_lote: 5674,
         createdAt: new Date(),
         updatedAt: new Date()
      }], {});
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Produtos', null, {});
  }
};
