const BaseResponse = require("../base/io/BaseResponse")

module.exports = class Request extends BaseResponse {
    constructor(htmlResponse) {
        super(htmlResponse)
        if (!this.error && htmlResponse?.data?.result) {
            this.success = true
            this.address = htmlResponse.data.result
        } else {
            this.success = false
        }
    }
}