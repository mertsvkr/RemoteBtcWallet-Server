const BaseResponse = require("../base/io/BaseResponse")

exports = class Request extends BaseResponse {
    constructor(htmlResponse) {
        super(htmlResponse)
        if (!this.error && htmlResponse?.data?.result?.name) {
            this.success = true
            this.name = htmlResponse.data.result.name
        } else {
            this.success = false
        }
    }
}