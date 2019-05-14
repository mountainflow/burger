const express = require('express');
const router = express.Router();

// This is coming from -- connection>orm>burger_model==============
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

// Exports to server.js============================================
module.exports = router;