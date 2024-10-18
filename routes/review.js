const express = require("express");
const router = express.Router({ mergeParams: true }); // To access the :id param from parent route
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview ,isLoggedIn,isreviewAuthor} = require("../middleware.js");
const listingController=require("../controllers/review.js")



// Post a new review route
router.post("/", validateReview, isLoggedIn, wrapAsync(listingController.newReview));


// Delete a review route
router.delete("/:reviewId",isLoggedIn,isreviewAuthor,wrapAsync(listingController.deleteReview));


module.exports = router;
