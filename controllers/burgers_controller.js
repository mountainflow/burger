const express = require('express');
const router = express.Router();

const burger = require('../models/burgerModel.js');

router.get("/", function (req, res) {
    burger.getAllBurgers(function (data) {
        let burgerObj = {
            burger: data
        }
        res.render('index', burgerObj);
    })
})

router.post("/api/burger", function (req, res) {
    console.log(req.body);
    let frntData = req.body;
    burger.postBurger(frntData, function (data) {
        console.log(data);
        res.send();
    })
})

module.exports = router;