const {Router} = require('express');
const users = require('../user_db/users_db');
const userRouter = Router();
const userController = require('../controllers/userController')

userRouter.get('/', userController.renderUsers);
userRouter.get('/:id', userController.getById);


module.exports = userRouter;