const db = require('./db');
const merchant = require('./merchant/models/merchant.js');


async function getAllMerchants() {
    try {
        await db.authenticate();
        const response = await merchant.findAll({ limit: 1 });
        const finalValues = response.map(getDataValues);
        console.log(finalValues);
    }
    catch (err) {
        console.log("Unable to connect to the database", err);
    }
}

function getDataValues(obj) {
    return obj.dataValues;
}

getAllMerchants();

// db
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });