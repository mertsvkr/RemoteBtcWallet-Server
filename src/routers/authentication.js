const express = require("express")
const authenticationMiddlewares = require("../middleware/authentication")
const authenticationControllers = require("../controller/authentication")
const router = express.Router()

//end point for signup requests
router.post("/signup", authenticationMiddlewares.authRequestFormatCheck, authenticationControllers.signupPostController)
router.post("/login", authenticationMiddlewares.authRequestFormatCheck, authenticationControllers.loginPostController)

module.exports = router
