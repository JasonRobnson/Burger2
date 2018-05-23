//Controller handles the routes limiting who can view what based on paths.


let express = require('express');
let router = express.Router();
let burger = require("../models/burger.js")




//Routes for the APP that interact with the database
router.get("/", (req, res) => {
    burger.all("burgers", (data) => {
        let HandbarsObj = {
            burgers: data
        };

        res.render("index", HandbarsObj);
    });
});

router.post("/api/burgers", (req, res) => {

    burger.create(req.body.burger_name, (data) => {
        res.json(data.insertId);
    })
});
router.post("/devour", (req, res) => {
    burger.update(req.body.burgerType);
    res.redirect("/")
})

router.get("/api/all", (req, res) => {
    burger.all("burgers", (data) => {
        res.json(data);
    })
})



module.exports = router;