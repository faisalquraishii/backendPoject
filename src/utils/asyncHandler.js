//a utility function for handling asynchronous request
const asyncHandler = (requestHandler) => {   //This defines a constant asyncHandler which is assigned an arrow function. This function takes a requestHandler as an argument.
    return (req, res, next) => {   /*Inside the outer function, there's another arrow function. This inner function is intended to be used as a middleware in Express.js. It takes req (request), res (response), 
                            and next (next middleware function) as parameters.*/
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
        /*The catch block is used to handle any errors that might occur during the execution of the requestHandler. 
        If an error occurs, it calls the next function with the err parameter, which passes the error to the next 
        middleware in the Express.js pipeline. */
    }
}

export { asyncHandler }