const fs= require('fs');
const path = require("path");


function changeData(){

    const personPath = path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt');
    const onlinePath = path.join(__dirname, 'main', 'online', 'onlineUsers.txt');
    fs.readFile(personPath, 'utf-8', (err, personData)=>{
        if (err){
            console.log(err)
        }
        fs.readFile(onlinePath, 'utf-8', (err1, onlineData)=>{
            if (err1){
                console.log(err1)
            }

            fs.appendFile(onlinePath, personData, {flag:'w'}, ()=>{});
            fs.appendFile(personPath, onlineData, {flag:'w'}, ()=>{});

        })





    })
}

module.exports = {changeData}