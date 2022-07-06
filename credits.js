// content
let usersCredits = [
    { id: 1, name: 'Peter', sum: '5980', date: '02/05/2018' },
    { id: 2, name: 'Monica', sum: '9040', date: '30/10/2021' },
    { id: 3, name: 'David', sum: '35700', date: '21/06/2019' },
    { id: 4, name: 'Travis', sum: '90850', date: '05/12/2017' },
    { id: 5, name: 'Richard', sum: '4550', date: '07/02/2022' }
]
// admins
const users = [
    {
        login: 'cccc',
        salt: '$2b$10$15xI4t0/5s5v0oy13oKuz.',
        hash: '$2b$10$15xI4t0/5s5v0oy13oKuz.rt5w69mu35qiS/u7wDuJHxQeJMF5d96'
      }
];

const tokens = [];

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/registration', (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    const user = {
        login: req.body.login,
        salt: salt,
        hash: hash

    };
    users.push(user);
    console.log(users)
    res.json({login: req.body.login, hash: hash});
});


app.post('/credits', function (req, res) {
    usersCredits.push(req.body);
    res.json(req.body);
});

function getRandomString() {
    let resString = '';
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const length = Math.floor(10 + Math.random() * 1000);
    for (let i = 0; i < length; i++){
      resString += letters[Math.floor(Math.random() * letters.length) - 1];
    }
    return resString;
  }
  

app.post('/token', (req, res) => {
    const {login, password} = req.body;
    const userInBase = users.find((user) => user.login === login);
    if (!userInBase) {
        res.status(401).json({ error: 'The user does not exist' });
    }
    const hash = bcrypt.hashSync(password, userInBase.salt)
    if (userInBase.hash === hash) {
        
    }
})

app.get('/credits', function (req, res) {
    res.json(usersCredits);
});

app.delete('/credits/', function (req, res) {

    const userInBase = users.find((user) => user.login === req.body.login );
    console.log(userInBase)
    if (!userInBase) {
        res.status(401).json({ Error: 'The user does not exist'}); 
    }

    if (userInBase.hash === req.body.hash) {
        restUsers = usersCredits.filter(client => client.id !== req.body.deleteId)
        res.json(restUsers)
    } else {
        res.status(401).json({ Error: 'Access denied'})
    }


    // достаю логин и пароль из тела запроса 
//     const { login, hash } = req.body;

// // сравниваем с существующими данными
//     if (login === users[0].login && hash === users[0].hash) {
        
//         const idOfUser = parseInt(req.params.id);
//         // из массива убираем найденное(полученное) значение
       
//         // take a test
//         const userIdx = usersCredits.findIndex((user) => user.id === idOfUser);
//         if (userIdx !== -1) {
//             // перезаписываем существующий массив
//             restUsers = usersCredits.filter((user) => user.id !== idOfUser);
//             usersCredits = [...restUsers];
//             res.json(usersCredits)
//         } else {
//             res.status(404).json()
//         }

//       } else {
//         //   логин и пароль не те
//         res.status(401).json({ error: 'Access denied' });
//       }
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
