class BaseRequest {
    constructor(requestParams) {
        if (requestParams) {
            this.method = requestParams.method
            this.wallet = requestParams.wallet
            this.params = requestParams.params
        }
    }
}

exports = BaseRequest