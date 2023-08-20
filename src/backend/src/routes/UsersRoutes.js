const { Router } = require('express');
const UsersController = require('../controllers/UsersControllers');

const router = Router();

router.get('/', UsersController.getUsers);
router.get('/:id', UsersController.getById);
router.post('/', UsersController.create);
router.put('/:id', UsersController.updateUser);
router.delete('/:id', UsersController.deleteUser);

module.exports = router;
