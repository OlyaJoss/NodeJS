
const fs = require('fs');

fs.readFile('./users.json', 'utf8', (err, data) => {
    if (!err) {
        let arr = JSON.parse(data)
        console.log(arr.reduce((acc, current)=> acc + current.age, 
        0) / arr.length)
    } else {
        console.log(err)
    }
})