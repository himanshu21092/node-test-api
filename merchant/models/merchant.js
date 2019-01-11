const Sequelize = require('sequelize');
const sequelize = require('../../db');
const Merchant = sequelize.define('merchant', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    merchant_id: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Merchant;