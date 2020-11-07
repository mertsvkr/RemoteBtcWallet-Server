const { getBalances } = require("../bitcoin_api/getbalances")

module.exports.getbalancesPostController = async (req, res) => {
    try {
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
