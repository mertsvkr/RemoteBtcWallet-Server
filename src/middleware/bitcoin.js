const User = require("../models/User")
module.exports.validateId = async (req, res, next) => {
    try {
        if (req.body.id) {
            var user = await User.findById(req.body.id)
            if (user) {
                req.user = user
                next()
            } else {
                res.status(400).send({ success: false, error: "There is no such user with the given 'id' " })
            }
        } else {
            res.status(400).send({ success: false, error: "Email and/or password are not provided" })
        }
    } catch (error) {
        console.error(error)
        res.status(400).send({ success: false, error: "There is no such user with the given 'id' " })
    }
}