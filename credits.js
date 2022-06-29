// content
let usersCredits = [
    { id: 124889, name: 'Peter', sum: '5980', date: '02/05/2018' },
    { id: 129, name: 'Monica', sum: '9040', date: '30/10/2021' },
    { id: 12, name: 'David', sum: '35700', date: '21/06/2019' },
    { id: 4889, name: 'Travis', sum: '90850', date: '05/12/2017' },
    { id: 779, name: 'Richard', sum: '4550', date: '07/02/2022' }
]
// admins
const users = [];

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/registration', (req, res) => {
    const user = {
        login: req.body.login,
        password: req.body.password
    };
    users.push(user);
    res.json(users);
});


app.post('/credits', function (req, res) {
    usersCredits.push(req.body);
    res.json(req.body);
});

app.get('/credits', function (req, res) {
    res.json(usersCredits);
});

app.delete('/credits/:id', function (req, res) {
    // достаю логин и пароль из тела запроса 
    const { login, password } = req.body;

// сравниваем с существующими данными
    if (login === users[0].login && password === users[0].password) {
        // users[0].login users[0].password
        const idOfUser = parseInt(req.params.id);
        // из массива убираем найденное(полученное) значение
       
        // take a test
        const userIdx = usersCredits.findIndex((user) => user.id === idOfUser);
        if (userIdx !== -1) {
            // перезаписываем существующий массив
            restUsers = usersCredits.filter((user) => user.id !== idOfUser);
            usersCredits = [...restUsers];
            res.json(usersCredits)
        } else {
            res.status(404).json()
        }

      } else {
        //   логин и пароль не те
        res.status(401).json({ error: 'Access denied' });
      }
});

app.put('/usersCredits/:id', function (req, res) {
    const idOfUser = parseInt(req.body.id);
    const userIdx = usersCredits.findIndex((user) => user.id === idOfUser);

    if (userIdx !== -1) {
        const oldUser = usersCredits[userIdx];
        usersCredits[userIdx] = { ...oldUser, ...req.body };
        res.json(usersCredits[userIdx]);
    } else {
        res.status(404).json()
    }
    res.json(usersCredits);
});

app.listen(80, () =>
    console.log(`Port 80`)
);
