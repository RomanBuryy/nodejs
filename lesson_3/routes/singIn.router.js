const {Router} = require('express');
const signInController = require('../controllers/signInController')
const users = require('../user_db/users_db');
const isEmailExist = require('../middleware/isEmailExist');


const signInRouter = Router();

signInRouter.post('/', isEmailExist, signInController.getSignin);

signInRouter.get('/', signInController.renderSignin);

module.exports = signInRouter;
