/*Purpose: Routers define the routes of your application. They group related routes together and delegate the 
handling of those routes to specific controllers.
Define the structure of the application's url*/

import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"; //can only make import like this only when the export is not default

const router = Router();

// router.route("/register").post(registerUser)  //defining the route '/register' and delegating the route to registerUser method(controller function)

router.route('/register').post((req, res, next) => {
    console.log('Request received at /register'); // Log the request
    next(); // Call the next middleware (in this case, registerUser)
}, registerUser);

export default router;
