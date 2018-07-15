const connection = require("./connection.js");


// Object Relational Mapping  for this app 
const orm = {
        all: (searchQuery, cb) => {
        const queryString = "SELECT * FROM " + searchQuery + ";"
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result)
        })
    },

    create: (tableName, burgerName, cb) => {
        const queryString = `INSERT INTO ${tableName} (burger_name, devoured) VALUES ("${burgerName}", False);`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: (tableName, burgerId, cb) => {
        const queryString = `UPDATE ${tableName} SET devoured=True WHERE id=${burgerId};`;
        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

};







module.exports = orm;