const fs = require('fs');
const path = require("path");

function create() {

    for (let i = 0; i < arguments.length - 1; i++) {

        fs.mkdir(path.join(__dirname, arguments[i], arguments[i + 1]), {recursive: true}, (err) => {
            if (err) {
                console.log(err);
            }
            console.log('Directory created');
        })
    }
}

module.exports = {create};