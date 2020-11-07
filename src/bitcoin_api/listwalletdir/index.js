const Request = require("./request")
const Response = require("./response")
const postRequest = require("../base/http/postRequest")

exports.listWalletDir = async () => {
    /**returns all wallets*/
    var request = new Request({ method: "listwalletdir", params: [] })
    var htmlResponse = await postRequest(request)
    return new Response(htmlResponse)
}