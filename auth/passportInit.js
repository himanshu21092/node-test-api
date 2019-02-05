const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Merchant = require('../models/merchant');

module.exports = app => {
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy(
        async function (username, password, done) {
            try {
                Merchant.find({
                    where: {
                        username: username
                    }
                })
                console.log(username, password);
                let user = {
                    username,
                    password
                }
                return done(null, user);
            }
            catch (e) {
                //this will eventually be handled by your error handling middleware
                console.log(e);
                next(e)
            }
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
}