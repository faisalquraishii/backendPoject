/*Purpose: Controllers handle the application logic. They contain the functions that define what happens when a specific route is accessed.*/
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res) => { //this is a method and will be invoked when a certain url will be hit. for eg: ..../register
    res.status(200).json({
        message: "Ok"
    })
} )

export { registerUser } //to make this function available for use in other parts of the application.