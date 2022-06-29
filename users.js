let users = [
    { id: 8, number: '580', name: 'Travis' },
    { id: 1, number: '940', name: 'Neo' },
    { id: 7, number: '333', name: 'Harry' },
];
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/user', function (req, res) {
    users.push(req.body);
    res.json(req.body);
});
app.get('/user', function (req, res) {
    res.json(users);
});

app.delete('/user/:id', function (req, res) {
    const idOfUser = parseInt(req.body.id);
    restUsers = users.filter((user) => user.id !== idOfUser);

    if (users !== -1) {
     users = { ...restUsers };
       res.json(users)
    } else {
        res.status(404).json()
    }  
    res.json(users);
})

app.put('/user/:id', function (req, res) {
    const idOfUser = parseInt(req.body.id);
    const userIdx = users.findIndex((user) => user.id === idOfUser);

    if (userIdx !== -1) {
        const oldUser = users[userIdx];
        users[userIdx] = { ...oldUser, ...req.body };
        res.json(users[userIdx]);
    } else {
        res.status(404).json()
    }
    res.json(users);
});

app.listen(3000, () =>
    console.log(`App are listening at port 3000`)
);