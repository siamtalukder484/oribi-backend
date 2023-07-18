const express = require("express");
const router = express.Router(); 


const registrationController = require("../../controllers/registrationController.js")
const loginController = require("../../controllers/loginController.js")


router.post("/registration", registrationController)
router.post("/login", loginController)


module.exports = router; 