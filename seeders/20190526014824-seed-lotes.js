'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Lotes', [{
         cod_lote: 5541,
         etapa: 'Recebimento',
         responsavel: 'José Francisco',
         maquina: 'Coletor digital (scanner)',
         data_inicio: new Date(),
         data_fim: new Date(new Date().getDate() + 10),
         data_atualizacao: new Date(),
         status: 'Concluído',
         id_produto: 235762,
         trajeto: 'Usinagem;Lavagem;Acabamento;Estoque',
         quantidade_produtos: 570,
         createdAt: new Date(),
         updatedAt: new Date()
      },{
         cod_lote: 5553,
         etapa: 'Acabamento',
         responsavel: 'João Paulo',
         maquina: 'CNC',
         data_inicio: new Date(),
         data_fim: new Date(new Date().getDate() + 2),
         data_atualizacao: new Date(),
         status: 'Concluído',
         id_produto: 235893,
         trajeto: 'Usinagem;Lavagem;Acabamento;Estoque',
         quantidade_produtos: 570,
         createdAt: new Date(),
         updatedAt: new Date()
      },{
         cod_lote: 5579,
         etapa: 'Lavagem',
         responsavel: 'Fernando Duarte',
         maquina: 'Lavadora',
         data_inicio: new Date(),
         data_fim: new Date(new Date().getDate() + 7),
         data_atualizacao: new Date(),
         status: 'Em Processo',
         id_produto: 239751,
         trajeto: 'Usinagem;Lavagem;Acabamento;Estoque',
         quantidade_produtos: 580,
         createdAt: new Date(),
         updatedAt: new Date()
      },{
         cod_lote: 5595,
         etapa: 'Recebimento',
         responsavel: 'Lucas Souza',
         maquina: 'Coletor digital (scanner)',
         data_inicio: new Date(),
         data_fim: new Date(new Date().getDate() + 10),
         data_atualizacao: new Date(),
         status: 'Concluído',
         id_produto: 239751,
         trajeto: 'Usinagem;Lavagem;Acabamento;Estoque',
         quantidade_produtos: 570,
         createdAt: new Date(),
         updatedAt: new Date()
      },{
         cod_lote: 5623,
         etapa: 'Estoque',
         responsavel: 'Sammuel',
         maquina: 'Carrinho hidráulico',
         data_inicio: new Date(),
         data_fim: new Date(new Date().getDate() + 1),
         data_atualizacao: new Date(),
         status: 'Disponível',
         id_produto: 273515,
         trajeto: 'Usinagem;Lavagem;Acabamento;Estoque',
         quantidade_produtos: 520,
         createdAt: new Date(),
         updatedAt: new Date()
      },{
         cod_lote: 5641,
         etapa: 'Usinagem',
         responsavel: 'Carlos',
         maquina: 'CNC',
         data_inicio: new Date(),
         data_fim: new Date(new Date().getDate() + 9),
         data_atualizacao: new Date(),
         status: 'Disponível',
         id_produto: 273515,
         trajeto: 'Usinagem;Lavagem;Acabamento;Estoque',
         quantidade_produtos: 520,
         createdAt: new Date(),
         updatedAt: new Date()
      },{
         cod_lote: 5674,
         etapa: 'Lavagem',
         responsavel: 'Phelippe',
         maquina: 'Lavadora',
         data_inicio: new Date(),
         data_fim: new Date(new Date().getDate() + 7),
         data_atualizacao: new Date(),
         status: 'Em Processo',
         id_produto: 235893,
         trajeto: 'Usinagem;Lavagem;Acabamento;Estoque',
         quantidade_produtos: 620,
         createdAt: new Date(),
         updatedAt: new Date()
      }], {});
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Lotes', null, {});
   }
};
