module.exports = (app) => {
    const passport = require('passport');
    const controller = require('./getUser.controller');

    // RETURNS ALL THE USERS IN THE DATABASE
    app
        .route('/getMerchant')
        .get(passport.authenticate('local'), controller.getUser);
}