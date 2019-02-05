module.exports = router => {
    require('./getUser/getUser.routes')(router);
    require('./login/login.routes')(router);
}