const User = require("../models/userModels");

async function secureUpload(req, res, next){
    
    let userid = req.headers.authorization.split("@")[1]
    let password = req.headers.authorization.split("@")[2]

    if(!req.headers.authorization){
        return res.send({error: "Unauthorized"})
    }

    let user = await User.find({_id: userid})
    console.log(user.length);
    console.log(process.env.MERCHANT_SECRET_KEY);
    console.log(password);

    if(user.length > 0){
        if(password == process.env.MERCHANT_SECRET_KEY){
            console.log(user[0].role);
            if(user[0].role == "merchant"){
                next()
            }else{
                return res.send({success: "You are not able to create product"})
            }
        }else{
            return res.send({success: "You are not able to create product"})
        }
    }else{
        return res.send({error: "You are not able to create product"})
    }
    
    
}

async function createProduct(req,res){
    res.send("Let's create product");
}

module.exports = {secureUpload, createProduct}