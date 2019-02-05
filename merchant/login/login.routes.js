module.exports = (app) => {
    const controller = require('./login.controller');
    const auth = require('../../middlewares/userAuth')

    // RETURNS ALL THE USERS IN THE DATABASE
    app
        .route('/login')
        .post(identify, auth ,controller.loginController);

}