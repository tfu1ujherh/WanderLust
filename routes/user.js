const express =require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js")
const listingController=require("../controllers/users.js")


// Route to render signup form and handle signup post request
router.route("/signup")
    // GET: Render the signup form
    .get(listingController.renderSingupForm)
    
    // POST: Handle signup form submission
    .post(wrapAsync(listingController.signup));



// Route to render login form and handle login post request
router.route("/login")
    // GET: Render the login form
    .get(listingController.renderLoginForm)
    
    // POST: Handle login form submission with redirect URL saving and authentication
    .post(saveRedirectUrl, passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }), listingController.login);



router.get("/logout", listingController.logout);


module.exports=router;