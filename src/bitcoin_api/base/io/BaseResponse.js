class BaseResponse {
    constructor(htmlResponse) {
        if (htmlResponse?.response) {
            this.error = htmlResponse.response.data?.error?.message
        }
        else {
            this.error = htmlResponse.data?.error
        }
        if (this.error) {
            console.error(this.error)
        }
    }
}

module.exports = BaseResponse