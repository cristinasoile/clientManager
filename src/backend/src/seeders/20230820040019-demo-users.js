module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Deborah Cristina',
        email: 'cris@teste.com',
        cpf: '12345678901',
        phone: '11910090807',
        status: 'Ativo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Priscila Resende Nascimento',
        email: 'pri@teste.com',
        cpf: '11109876543',
        phone: '11901020304',
        status: 'Inativo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Leonardo Prado',
        email: 'leo@teste.com',
        cpf: '11010203040',
        phone: '11903040506',
        status: 'Aguardando ativação',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jonathan Verdeli',
        email: 'verdeli@teste.com',
        cpf: '11123456789',
        phone: '11998765432',
        status: 'Desativado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
