var session = require('express-session');
var RedisStore = require('connect-redis')(session);

const redisOptions = {
    host: '127.0.0.1', //can be IP or hostname
    port: 6379, // port
    multiple: true // single or multiple sessions by user
}

module.exports = session({
    store: new RedisStore(redisOptions),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
});