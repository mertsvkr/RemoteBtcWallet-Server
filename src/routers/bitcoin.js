const express = require("express")
const { validateId } = require("../middleware/bitcoin")
const bitcoinControllers = require("../controller/bitcoin")
const router = express.Router()

router.post("/bitcoin/getbalances", validateId, bitcoinControllers.getbalancesPostController)
router.post("/bitcoin/getaddress", validateId, bitcoinControllers.getaddressPostController)
router.post("/bitcoin/newtransaction", validateId, bitcoinControllers.newtransactionPostController)


