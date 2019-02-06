module.exports = (app) => {
    const controller = require('./login.controller');
    const auth = require('../../middlewares/userAuth')
    const passport = require('passport');

    // RETURNS ALL THE USERS IN THE DATABASE
    app
        .route('/login')
        .post(passport.authenticate('local') ,controller.loginController);

}