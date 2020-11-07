const Request = require("./request")
const Response = require("./response")
const postRequest = require("../base/http/postRequest")

module.exports.loadWallet = async (walletName) => {
    const request = new Request({ method: "loadwallet", params: [walletName] })
    const httpResponse = await postRequest(request)
    return new Response(httpResponse)
} 