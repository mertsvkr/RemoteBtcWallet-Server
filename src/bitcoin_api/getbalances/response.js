const BaseResponse = require("../base/io/BaseResponse")

module.exports = class Request extends BaseResponse {
    constructor(htmlResponse) {
        super(htmlResponse)
        if (!this.error && htmlResponse?.data?.result?.mine) {
            this.success = true
            this.realBalance = htmlResponse.data.result.mine.trusted
            this.pending = htmlResponse.data.result.mine.untrusted_pending
            this.immature = htmlResponse.data.result.mine.immature
        } else {
            this.success = false
        }
    }
}