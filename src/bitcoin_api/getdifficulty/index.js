const Request = require("./request")
const Response = require("./response")
const postRequest = require("../base/http/postRequest")

module.exports.getDifficulty = async () => {
    /**returns the current difficulty*/
    var request = new Request({ method: "getdifficulty", params: [] })
    var htmlResponse = await postRequest(request)
    return new Response(htmlResponse)
}