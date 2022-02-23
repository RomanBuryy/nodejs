const {Router} = require('express');
const userRouter = require('./user.router');
const loginRouter = require('./loginRouter');
const signInRouter = require('./singIn.router')

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/signIn', signInRouter)
routes.use((req, res) => {
        res.render('pageNotFound')
    }
);

module.exports = routes;