const fs= require('fs');
const path = require("path");

const createDirectory = require("./createDirectory");
const {writeFile} = require("./writeFile");
const {changeData} = require("./changeData");

onlineUsers = [{name: "Andrii", age: 22, city: "Lviv" }];
inPersonUsers = [{name: "Roman", age: 38, city: "Kyiv" }];

createDirectory.create('main','online');
createDirectory.create('main','inPerson');

writeFile(onlineUsers,'main','online', 'onlineUsers.txt');
writeFile(inPersonUsers,'main','inPerson', 'inPersonUsers.txt');

changeData();






