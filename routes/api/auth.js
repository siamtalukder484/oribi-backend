const express = require("express");
const router = express.Router(); 

const registrationController = require("../../controllers/registrationController.js")
const loginController = require("../../controllers/loginController.js");
const emailVerificationOtpMatch = require("../../controllers/emailVerificationOtpMatch.js");


router.post("/registration", registrationController)
router.post("/login", loginController)
router.post("/emailverification", emailVerificationOtpMatch)


module.exports = router;