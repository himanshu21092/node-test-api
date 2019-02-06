// Login controller introduced
exports.loginController = async function (req, res, next) {
    try {
        // console.log(req);
        res.json(req.headers);
    }
    catch (e) {
        //this will eventually be handled by your error handling middleware
        console.log(e);
        next(e)
    }
}