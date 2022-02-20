const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

const users = [
    {
        id: 1,
        firstName: "Leanne Graham",
        lastName: "Bret",
        email: "Sincere@april.biz",
        password: "12345",
        age: 23,
        city: "Lviv"
    },
    {
        id: 2,
        firstName: "aaaaaaaa",
        lastName: "aaaaaaaaaa",
        email: "aaa@april.biz",
        password: "asdf",
        age: 45,
        city: "Kyiv"
    },
    {
        id: 3,
        firstName: "bbbbbbbbbb",
        lastName: "bbbbbbb",
        email: "bbb@april.biz",
        password: "098978",
        age: 60,
        city: "Lviv"
    },
    {
        id: 4,
        firstName: "ccccccccc",
        lastName: "cccccccc",
        email: "ccc@april.biz",
        password: "56ge54",
        age: 402,
        city: "Lviv"
    },
];

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.listen(4200, () => {
    console.log('Server started on port 4200');
})

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/users', (req, res) => {
    res.render('users', {users});
});

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    // res.json(users[id]);
    res.render('user', {user: users[id-1]});
})

app.post('/login', (req, res) => {
    const ifEmailExist = users.some(value => value.email === req.body.email);
    console.log(ifEmailExist);

    if (!ifEmailExist) {
        users.push(req.body);
    }
    res.redirect('/users');
});

app.use((req, res) => {
        res.render('pageNotFound')
    }
)




