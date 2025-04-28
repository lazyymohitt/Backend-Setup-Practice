class ApiError extends Error {
    constructor(
        statusCode,
        message = "something Went Wrong",
        errorsxd = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode,
        this.data = null ,
        this.message = message,
        this.success = false ,
        this.errors = errorsxd 

        if(statck) {
            this.stack = statck
        }else {
            Error.captureStackTrace(this,this.contructor)
        }
    }
}   
export {ApiError}