const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'urazaev.beget.tech',
    port: 3306,
    user: 'urazaev_olga',
    password: '7rh&r0Ho',
    database: 'urazaev_olga'
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