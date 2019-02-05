const passport = require('passport');
module.exports = function (req, res, next) {
    // console.log(req);
    passport.authenticate('local', function (err, user, info) {
        console.log(err);
        console.log(user);
        console.log(info);
        next();
    })(req, res, next);
};