const fs = require('fs')
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'amazon'
});
connection.connect((err) => {
    if (!err) {
        console.log('success')
        fs.readFile('./clients.json', 'utf8', (err, data) => {
            const dataArray = JSON.parse(data)
    
            dataArray.map(({description, due, employee, finished})=>{
                
                connection.query(`INSERT INTO clientTasks (description, due, employee, finished) VALUES
                ('${description}', '${due}', '${employee}', '${finished}')`), 
            (err, data) => {
             if (!err) {
            console.log(data);
             }}
 })
      })
    } else {
        console.log('Connect', err)
    }
});

  