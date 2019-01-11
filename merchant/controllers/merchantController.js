var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const db = require('../../db');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Merchant = require('../models/merchant');

function getDataValues(obj) {
    return obj.dataValues;
}

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/getMerchant', async (req, res, next) => {
    try {
        await db.authenticate();
        const response = await Merchant.findAll({ limit: 1 });
        const finalValues = response.map(getDataValues);
        res.json(finalValues);
    }
    catch (e) {
        //this will eventually be handled by your error handling middleware
        console.log(e);
        next(e)
    }
});

// New Route
router.get('/getBiraj', async (req, res, next) => {
    try {
        res.json({name: 'Viraj'});
    }
    catch (e) {
        //this will eventually be handled by your error handling middleware
        console.log(e);
        next(e)
    }
});

module.exports = router;