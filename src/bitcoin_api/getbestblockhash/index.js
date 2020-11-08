const Request = require("./request")
const Response = require("./response")
const postRequest = require("../base/http/postRequest")

module.exports.getBestBlockHash = async () => {
    /**returns the hash of the last block of the blockchain*/
    var request = new Request({ method: "getbestblockhash", params: [] })
    var htmlResponse = await postRequest(request)
    return new Response(htmlResponse)
}