const usersService = require('../services/UsersService');

const getUsers = async (_req, res) => {
  try {

    const users = await usersService.getUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const getById = async (req, res) => {
  try {
    const {id} = req.params;
    const users = await usersService.getById(id);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });

  }
}

const create = async (req, res) => {
  try {
    const body = req.body;
    const users = await usersService.create(body);
    return res.status(201).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const users = await usersService.updateUser(id, body);
    return res.status(201).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await usersService.deleteUser(id);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

}


module.exports = {
  getUsers,
  getById,
  create,
  updateUser,
  deleteUser,
}
