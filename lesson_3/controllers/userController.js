const users = require("../user_db/users_db");

class UserController {
    renderUsers(req, res) {
        res.render('users', {users});
    }

    getById(req, res) {
        const {id} = req.params;
        res.render('user', {user: users[id - 1]});
    }


}

module.exports = new UserController();