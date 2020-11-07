const User = require("../models/User")
module.exports.validateId = async (req, res, next) => {
    if (req.body.id) {
        var user = User.findById(req.body.id)
        if (user) {
            req.user = user
            next()
        } else {
            res.status(400).send({ success: false, error: "There is no such user with the given 'id' " })
        }
    } else {
        res.status(400).send({ success: false, error: "Email and/or password are not provided" })
    }
}