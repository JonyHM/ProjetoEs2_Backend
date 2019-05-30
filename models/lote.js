'use strict';
module.exports = (sequelize, DataTypes) => {
   const Lote = sequelize.define('Lote', {
      cod_lote: DataTypes.INTEGER,
      etapa: DataTypes.STRING,
      responsavel: DataTypes.STRING,
      maquina: DataTypes.STRING,
      data_inicio: DataTypes.DATE,
      data_fim: DataTypes.DATE,
      data_atualizacao: DataTypes.DATE,
      status: DataTypes.STRING,
      id_produto: DataTypes.INTEGER,
      trajeto: DataTypes.STRING,
      quantidade_produtos: DataTypes.INTEGER
   }, {});
   Lote.associate = function(models) {
   };
   return Lote;
};