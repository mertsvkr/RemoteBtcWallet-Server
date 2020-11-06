const BaseResponse = require("../base/io/BaseResponse")

exports = class Request extends BaseResponse {
    constructor(htmlResponse) {
        super(htmlResponse)
        if (!this.error && htmlResponse?.data?.result) {
            this.success = true
            this.wallets = htmlResponse.data.result.wallets
        } else {
            this.success = false
        }
    }
}