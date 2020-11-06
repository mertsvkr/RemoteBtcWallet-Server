const Request = require("./request")
const Response = require("./response")
const postRequest = require("../base/http/postRequest")

exports.getBalances = async (walletName) => {
    var request = new Request({ method: "getbalance", wallet: walletName, params: [] })
    var htmlResponse = await postRequest(request)
    return new Response(htmlResponse)
}