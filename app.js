const express = require('express');
const app = express();

const MerchantController = require('./merchant/controllers/merchantController');
app.use('/merchants', MerchantController);


module.exports = app;