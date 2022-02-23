const users = require('../user_db/users_db');

class LoginController {
    getLogin(req, res) {
        res.render('login');
    }

    postLogin(req, res){
        const ifEmailExist = users.some(value => value.email === req.body.email);

        if (!ifEmailExist) {
            users.push(req.body);
        }
        res.redirect('/users');
    }
}


module.exports = new LoginController();