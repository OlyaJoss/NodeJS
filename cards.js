const usersData = [
    { id: 124889, number: '580' },
    { id: 129, number: '940' },
    { id: 12, number: '333' },
    { id: 4889, number: '59' },
    { id: 779, number: '50' }
]

const express = require('express');
const app = express();

app.get('/card', function (req, res) {
    res.json(usersData);

})

app.get('/card/:id', function (req, res) {
    const userId = parseInt(req.params.id);
    const user = usersData.find((item) => item.id === userId)
    if (!user) {
        res.status(404).send()
    }
    res.status(200).json(user)
    // const result = usersData.find(
    //     (item) => item.id === req.params.id
    // )
    // res.send(
    //     // {"id":"12","card":"333"}
    //  JSON.stringify(
    //         result.number
    //     ));
})

// app.listen(80, function () {
//     console.log('Example app listening on port 80!')
// });
