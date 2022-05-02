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
    } else {
        console.log('Connect', err)
    }
});
connection.query('SELECT * FROM albums',
    (err, data) => {
        if (!err) {
            console.log(data)
        } else {
            console.log('Query', err)
        }
    }
)