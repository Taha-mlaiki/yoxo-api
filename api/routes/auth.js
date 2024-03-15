const express = require("express");
const router = express.Router();
const signupRoute = require("../controllers/auth/signup.controlle");


router.post("/signup", signupRoute);

module.exports = router;
