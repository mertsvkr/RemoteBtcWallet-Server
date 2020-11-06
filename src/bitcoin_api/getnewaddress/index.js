const Request = require("./request")
const Response = require("./response")
const postRequest = require("../base/http/postRequest")

exports.getNewAddress = async (walletName) => {
    /**returns public key of the given wallet*/
    var request = new Request({ method: "getnewaddress", wallet: walletName, params: [] })
    var htmlResponse = await postRequest(request)
    return new Response(htmlResponse)
}