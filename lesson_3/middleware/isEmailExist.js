const users = require('../user_db/users_db');

function isEmailExist(req, res, next) {

    try {
        const {email} = req.body;

        if (users.some(value => value.email === email)) {
            throw new Error('Email exist in users array');
        }
        next();
    } catch (e) {

        res.status(400).send(e.message);
    }
}

module.exports = isEmailExist;