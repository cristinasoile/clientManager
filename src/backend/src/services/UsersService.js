const {Users}  = require('../models');

const getUsers = async () => {
  const users = await Users.findAll();
  return users;
}

const getById = async (id) => {
  const usersId = await Users.findByPk(id);
  return usersId;
}

const create = async (body) => {
  const userCreated = await Users.create(body);
  return userCreated;
}

const updateUser = async (id, body) => {
  const userUpdated = await Users.update(body, { where: { id } });
  return userUpdated;

}

const deleteUser = async (id) => {
  const userDelete = await Users.destroy({ where: { id } });
  return userDelete;

}


module.exports = {
  getUsers,
  getById,
  create,
  updateUser,
  deleteUser,
}
