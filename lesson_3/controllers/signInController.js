const users = require("../user_db/users_db");

class SignInController {
    getSignin(req, res) {
        users.push(req.body);
        res.redirect('/users');
    }

    renderSignin(req, res) {
        res.render('signIn');
    }


}


module.exports = new SignInController();