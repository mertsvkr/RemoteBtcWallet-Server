class BaseResponse {
    constructor(htmlResponse) {
        if (htmlResponse?.response) {
            this.error = htmlResponse.response.data?.error?.message
        }
        else {
            this.error = htmlResponse.data?.error
        }
    }
}

exports = BaseResponse