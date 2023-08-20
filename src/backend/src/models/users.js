'use strict';

const Users = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('Users', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: DataTypes.STRING,
  },
    {
      tableName: 'users',
      underscored: true,
    });

    UserTable.associate = function(models) {
      // associations can be defined here
    };
  return UserTable;
};

module.exports = Users;
