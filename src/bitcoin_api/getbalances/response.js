const BaseResponse = require("../base/io/BaseResponse")

exports = class Request extends BaseResponse {
    constructor(htmlResponse) {
        super(htmlResponse)
        if (!this.error && htmlResponse?.data?.result?.mine) {
            this.success = true
            this.realBalance = htmlResponse.data.result.mine.trusted
            this.pending = html.Response.data.result.mine.untrusted_pending
            this.immature = html.Response.data.result.mine.immature
        } else {
            this.success = false
        }
    }
}