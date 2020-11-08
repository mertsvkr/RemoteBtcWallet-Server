const Request = require("./request")
const Response = require("./response")
const postRequest = require("../base/http/postRequest")

module.exports.getBestBlockHash = async () => {
    /**returns realBalance, pending balance and immature of the wallet. for more info go to the implementation of Response class*/
    var request = new Request({ method: "getbestblockhash", params: [] })
    var htmlResponse = await postRequest(request)
    return new Response(htmlResponse)
}