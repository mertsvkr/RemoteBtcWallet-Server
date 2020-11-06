const User = require("../models/User")
const { createWallet } = require("../bitcoin_api/createwallet")

exports.signupPostController = async (req, res) => {
    try {
        if (await User.findByEmail(req.body.email)) {
            // if a user is found with the given email dont save it again.
            res.status(403).send({ success: false, error: "User is already registered with this email." })
        } else {
            req.body.wallet = req.body.email.split("@")[0] // takes the substring of the email which is before the '@' character 
            var apiResponse = await createWallet(req.body.wallet) // create new wallet by bitcoin api
            if (apiResponse.success) { // if the wallet is created successfully
                var newUser = User(req.body)
                await newUser.save()
                res.status(201).send({ success: true, user: { id: newUser._id, email: newUser.email } })
            } else {
                console.error("Wallet is not created for the user:" + req.body.email)
                res.status(500).send({ success: false, error: "Unknown server error" })
            }
        }
    } catch (e) {
        //Unknown error. dont send to the user
        console.error(err)
        res.status(500).send({ success: false, error: "Unknown server error" })
    }
}

exports.loginPostController = async (req, res) => {
    try {
        var userRecord = await User.findByEmail(req.body.email) //check for the user record with an email
        if (userRecord) { // if user is found
            if (userRecord.password == req.body.password) { // if passwords are matched
                res.status(201).send({ success: true, user: { id: userRecord._id, email: userRecord.email } })

            } else {
                res.status(401).send({ success: false, error: "Wrong password" })
            }
        } else {
            res.status(401).send({ success: false, error: "No such user with the given email." })
        }

    } catch (err) {
        console.error(err)
        res.status(500).send({ success: false, error: "Unknown server error" })
    }
}