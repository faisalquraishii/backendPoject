//class named ApiError that extends the built-in Error class in JavaScript
class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.success = false
        this.message = message
        this.errors = errors

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}