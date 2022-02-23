const {Router} = require('express');

const users = require('../user_db/users_db');
const loginController = require('../controllers/loginController');
const areAllFieldsFilled = require('../middleware/areAllFieldsFilled');
const isEmailExist = require('../middleware/isEmailExist')


const loginRouter = Router();

loginRouter.get('/',loginController.getLogin);

loginRouter.post('/', areAllFieldsFilled, loginController.postLogin);

module.exports = loginRouter;