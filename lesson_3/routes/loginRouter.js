const {Router} = require('express');
const users = require('../user_db/users_db');


const loginRouter = Router();

loginRouter.get('/', (req, res) => {
    res.render('login');
});


loginRouter.post('/', (req, res) => {
    const ifEmailExist = users.some(value => value.email === req.body.email);
    console.log(ifEmailExist);

    if (!ifEmailExist) {
        users.push(req.body);
    }
    res.redirect('/users');
})


module.exports = loginRouter;