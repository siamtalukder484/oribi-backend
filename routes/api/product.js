const express = require("express");
const router = express.Router();
const {secureUpload,createProduct,createVariant} = require("../../controllers/productController.js")
const multer = require("multer")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
  
      let imageextention = file.originalname.split(".")
      let originalextention = imageextention[imageextention.length-1]
     
      cb(null, file.fieldname + '-' + uniqueSuffix + `.${originalextention}`)
    }
  })
  
  const upload = multer({ storage: storage })

router.post("/createproduct",secureUpload,createProduct)
router.post("/createvariant", upload.single('image'),createVariant)


module.exports = router; 