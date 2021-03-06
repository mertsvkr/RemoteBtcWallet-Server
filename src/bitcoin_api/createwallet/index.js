const Request = require("./request")
const Response = require("./response")
const postRequest = require("../base/http/postRequest")

module.exports.createWallet = async (walletName) => {
    var request = new Request({ method: "createwallet", params: [walletName] })
    var htmlResponse = await postRequest(request)
    return new Response(htmlResponse)
}