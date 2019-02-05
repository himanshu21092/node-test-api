// Login controller introduced
exports.getUser = async function getUser(req, res, next) {
    try {
        if (req.isAuthenticated()) {
            // console.log(req);
        }
        res.json(req.user);
    }
    catch (e) {
        //this will eventually be handled by your error handling middleware
        console.log(e);
        next(e)
    }
}