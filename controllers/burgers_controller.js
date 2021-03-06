const express = require('express');
const router = express.Router();

// This is coming from -- connection > orm > burgerModel ===========
const burgerModel = require('../models/burgerModel.js');

router.get("/", function (req, res) {
    burgerModel.getAllBurgers(function (data) {
        let burgerObj = {
            burger: data
        }
        res.render('index', burgerObj);
    })
});

router.post("/api/burger", function (req, res) {
    let frntData = req.body;
    burgerModel.postBurger(frntData, function (data) {
        res.send();
    })
});

router.put("/api/burger/:id", function (req, res) {
    let id = req.params.id;
    burgerModel.putBurger(id, function (data) {
        res.send();
    })
});

router.delete("/api/burger/:id", function (req, res) {
    let id = req.params.id;
    burgerModel.deleteBurger(id, function (data) {
        res.send();
    })
});

// Exports to server.js ============================================
module.exports = router;