'use strict';
module.exports = (sequelize, DataTypes) => {
   const Produto = sequelize.define('Produto', {
      nome: DataTypes.STRING,
      codigo: DataTypes.INTEGER,
      id_lote: DataTypes.INTEGER
   }, {});
   Produto.associate = function(models) {
   };
  return Produto;
};