let orm = require("../config/orm.js")

//The place to define data structures and methods to interact with your data store.

let burger = {
    all: (searchQuery, cb) => {
        orm.all(searchQuery, (res) => {
            cb(res);
        })
    },
    create: (burgerName, cb) => {
        orm.create("burgers", burgerName, (res) => {
            cb(res);
        })    
     },
    update: (burgerId, cb) => {
        orm.update("burgers", burgerId, (res) => {
    
        })
     }
    
    
};


module.exports = burger;