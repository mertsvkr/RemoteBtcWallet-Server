const { getBalances } = require("../bitcoin_api/getbalances")
const { getNewAddress } = require("../bitcoin_api/getnewaddress")
const { sendToAddress } = require("../bitcoin_api/sendtoaddress")
const { getBlockHeader } = require("../bitcoin_api/getblockheader")
const { getBestBlockHash } = require("../bitcoin_api/getbestblockhash")
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

module.exports.newtransactionPostController = async (req, res) => {
    if (req.body.address && req.body.amount) {
        const transactionResponse = await sendToAddress(req.user.wallet, req.body.address, req.body.amount)
        if (transactionResponse.success) {
            const balances = await getBalances(req.user.wallet)
            res.status(200).send({ success: true, txid: transactionResponse.txid, balances: balances })
        } else {
            res.status(400).send({ success: false, error: transactionResponse.error })
        }

    } else {
        res.status(400).send({ success: false, error: "Address and amount of BTC should be provided." })
    }
}

module.exports.getTenBlocks = async (req, res) => {
    try {
        if (req.body.hash) {
            var currentBlockHash = req.body.hash
        } else {
            var currentBlockHash = (await getBestBlockHash()).hash
        }
        var currentBlockHeader = null
        var hashArray = []
        for (let i = 0; i < 11; i++) {
            currentBlockHeader = (await getBlockHeader(currentBlockHash)).header
            currentBlockHash = currentBlockHeader?.previousblockhash
            hashArray.push(currentBlockHash)
        }
        res.status(200).send({ success: true, hashes: hashArray })
    } catch (e) {
        console.error(e)
        res.status(400).send({ success: false, error: e })
    }
}