const Request = require("./request")
const Response = require("./response")
const postRequest = require("../base/http/postRequest")

exports.createWallet = async (walletName) => {
    var request = new Request({ method: "createwallet", params: [walletName] })
    var htmlResponse = postRequest(request)
    return new Response(htmlResponse)
}