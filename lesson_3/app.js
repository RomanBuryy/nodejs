const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

const apiRoutes = require('../lesson_3/routes/routers')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(apiRoutes);

app.listen(4200, () => {
    console.log('Server started on port 4200');
})























