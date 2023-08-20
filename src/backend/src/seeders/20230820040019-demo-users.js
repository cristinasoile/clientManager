module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Deborah Cristina',
        email: 'cris@teste.com',
        cpf: '12345678901',
        phone: '11910090807',
        status: 'Ativo',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Priscila Resende Nascimento',
        email: 'pri@teste.com',
        cpf: '11109876543',
        phone: '11901020304',
        status: 'Inativo',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Leonardo Prado',
        email: 'leo@teste.com',
        cpf: '11010203040',
        phone: '11903040506',
        status: 'Aguardando ativação',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Jonathan Verdeli',
        email: 'verdeli@teste.com',
        cpf: '11123456789',
        phone: '11998765432',
        status: 'Desativado',
        created_at: new Date(),
        updated_at: new Date(),
      },
      ], { });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
