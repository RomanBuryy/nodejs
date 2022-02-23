function areAllFieldsFilled(req, res, next) {

    try {
        if (req.body.email.length === 0 ||
            req.body.firstName.length === 0 ||
            req.body.lastName.length === 0 ||
            req.body.password.length === 0 ||
            req.body.age.length === 0 ||
            req.body.city.length === 0) {
            throw new Error('Empty field')
        }
        next();

    } catch (e) {
        console.log(e.message);
        res.status(400).send(e.message);
    }

}

module.exports = areAllFieldsFilled;