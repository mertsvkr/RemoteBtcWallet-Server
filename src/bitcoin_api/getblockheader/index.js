const Request = require("./request")
const Response = require("./response")
const postRequest = require("../base/http/postRequest")

module.exports.getBlockHeader = async (hash) => {
    /**returns the header of the given block*/
    var request = new Request({ method: "getblockheader", params: [hash] })
    var htmlResponse = await postRequest(request)
    return new Response(htmlResponse)
}