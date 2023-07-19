const express = require("express");
const router = express.Router();

const authentication = require("./auth.js");
const categoryRoute = require("./category.js")

router.use("/auth", authentication);
router.use("/category", categoryRoute);

module.exports = router;   