const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vacations',
    connectionLimit: 100,
})

module.exports.executeQuery = (querryString, params) =>{
    return new Promise((resolve, reject) =>{
        connection.query(querryString , params, function (error, results, fields) {
            if (error){
                reject (error)
            } else {
                resolve (results)
            }
        })
    })
}
