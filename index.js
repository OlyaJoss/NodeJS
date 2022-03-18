
const fs = require('fs');

fs.readFile('./users.json', 'utf8', (err, data) => {
    if (!err) {
        let arr = Array.from(data)
        let ageSum = 0
       arr.map(({ age }) => ageSum += age)
        let ageAverage = ageSum / 3
        console.log(ageAverage)
    } else {
        console.log(err)
    }
})