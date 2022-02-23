const {Router} = require('express');
const userRouter = Router();
const userController = require('../controllers/userController')

userRouter.get('/', userController.renderUsers);
userRouter.get('/:id', userController.getById);

module.exports = userRouter;

