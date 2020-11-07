const Request = require("./request")
const Response = require("./response")
const postRequest = require("../base/http/postRequest")

module.exports.getBalances = async (walletName) => {
    /**returns realBalance, pending balance and immature of the wallet. for more info go to the implementation of Response class*/
    var request = new Request({ method: "getbalances", wallet: walletName, params: [] })
    var htmlResponse = await postRequest(request)
    return new Response(htmlResponse)
}