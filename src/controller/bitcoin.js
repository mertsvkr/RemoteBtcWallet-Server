const { getBalances } = require("../bitcoin_api/getbalances")
const { getNewAddress } = require("../bitcoin_api/getnewaddress")
module.exports.getbalancesPostController = async (req, res) => {
    try {
        // get the balance from the bitcoin api by using the user's wallet name and return a response to the user
        const balances = await getBalances(req.user.wallet)
        if (balances.success) {
            res.status(200).send({ success: true, balances: balances })
        } else {
            res.status(500).send({ success: false, error: "Unknown server error" })
        }
    } catch (e) {
        console.error(e)
        res.status(500).send({ success: false, error: "Unknown server error" })
    }
}

module.exports.getaddressPostController = async (req, res) => {
    try {
        // generate a new public key (address) from the bitcoin api for the provided wallet and return a response to the user
        const newAddress = await getNewAddress(req.user.wallet)
        if (newAddress.success) {
            res.status(200).send({ success: true, address: newAddress })
        } else {
            res.status(500).send({ success: false, error: "Unknown server error" })
        }
    } catch (e) {
        console.error(e)
        res.status(500).send({ success: false, error: "Unknown server error" })
    }
}