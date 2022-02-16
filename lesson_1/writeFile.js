const fs = require('fs');
const path = require("path");

function writeFile(arr, main, dir, fileName) {
    for (let i = 0; i < arr.length; i++) {
        for (const user in arr[i]) {
            fs.appendFile(path.join(__dirname, main, dir, fileName), `\n ${user}: ${arr[i][user]} `, err => {
                if (err) {
                    throw err
                }
                console.log('add data success')
            });
        }
    }
}

module.exports = {writeFile}