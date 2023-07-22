const express = require("express");
const router = express.Router();

const authentication = require("./auth.js");
const categoryRoute = require("./category.js")
const productRoute = require("./product.js")

router.use("/auth", authentication);
router.use("/category", categoryRoute);
router.use("/product", productRoute)

module.exports = router;   