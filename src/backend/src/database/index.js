const {Sequelize} = require('sequelize');
const development = require('../config/config');

const connection = new Sequelize(development);

module.exports = connection;
