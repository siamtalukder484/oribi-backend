const express = require("express");
const router = express.Router(); 


const registrationController = require("../../controllers/registrationController.js")


router.post("/registration", registrationController)


module.exports = router; 