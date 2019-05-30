'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Lotes', [{
         cod_lote: 5541,
         etapa: 'Recebimento',
         responsavel: 'Seu Zé',
         maquina: 'Coletor digital (scanner)',
         data_inicio: new Date(),
         data_fim: new Date(new Date().getDate() + 10), //finaliza em 10 dias
         data_atualizacao: new Date(),
         status: 'Disponível', //não lembro status acordados com os caras
         id_produto: 235762,
         trajeto: 'Usinagem;Lavagem;Acabamento;Estoque', //tbm n lembro
         quantidade_produtos: 570,
         createdAt: new Date(),
         updatedAt: new Date()
      },{
         cod_lote: 5553,
         etapa: 'Acabamento',
         responsavel: 'Jão',
         maquina: 'CNC',
         data_inicio: new Date(),
         data_fim: new Date(new Date().getDate() + 2),
         data_atualizacao: new Date(),
         status: 'Disponível',
         id_produto: 235893,
         trajeto: 'Usinagem;Lavagem;Acabamento;Estoque',
         quantidade_produtos: 570,
         createdAt: new Date(),
         updatedAt: new Date()
      },{
         cod_lote: 5579,
         etapa: 'Lavagem',
         responsavel: 'Xespirito',
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
         responsavel: 'Fernandinho',
         maquina: 'Coletor digital (scanner)',
         data_inicio: new Date(),
         data_fim: new Date(new Date().getDate() + 10),
         data_atualizacao: new Date(),
         status: 'Disponível',
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
