const Request = require("./request")
const Response = require("./response")
const postRequest = require("../base/http/postRequest")

module.exports.sendToAddress = async (walletName, address, amount) => {
    /**sends the given amount of BTC to the given address from the given wallet*/
    var request = new Request({ method: "sendtoaddress", wallet: walletName, params: [address, amount] })
    var htmlResponse = await postRequest(request)
    return new Response(htmlResponse)
}