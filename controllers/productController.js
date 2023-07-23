const User = require("../models/userModels")
async function secureUpload(req, res, next){
    
    let userid = req.headers.authorization.split("@")[1]
    let password = req.headers.authorization.split("@")[2]
    if(!req.headers.authorization){
        return res.send({error: "Unauthorized"})
    }

    let user = await User.find({_id: userid})
    if(user.length > 0){
        console.log(userid);
        console.log(password);
    }else{
        return res.send({error: "You are not able to create product"})
    }
    

    
}

module.exports = {secureUpload}