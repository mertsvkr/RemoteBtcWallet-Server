const axios = require("axios")
const { RPC_URL } = require("../../constants")

const axiosBaseInstance = axios.create({
    baseURL: RPC_URL,
    responseType: 'json'
});

module.exports = async (request) => {
    /**This function sends a http request for bitcoin's RPC  */
    var httpBody = { "jsonrpc": "1.0", "id": "curltest", "method": request.method, "params": request.params }
    var url = request.wallet ? RPC_URL + "wallet/" + request.wallet : RPC_URL

    return await axiosBaseInstance.post(url, httpBody)
        .then(res => {
            return res
        })
        .catch(error => {
            return error
        })
}
