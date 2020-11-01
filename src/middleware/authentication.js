const validator = require("validator")

exports.authRequestFormatCheck = async (req, res, next) => {
    if (req?.body?.email && req?.body?.password) {
        // if the request has both email and password

        if (!validator.isEmail(req.body.email)) {
            //if the email is not in the right format
            res.status(400).send({ success: false, error: "Invalid email." })
        }
        else if (req.body.password.length < 6) {
            res.status(400).send({ success: false, error: "Password should be longer than 6 characters" })
        } else {
            //if the request format is true next to the controller function
            next()
        }
    } else {
        res.status(400).send({ success: false, error: "Email and/or password are not provided" })
    }
}