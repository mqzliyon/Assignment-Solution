const {ProfileModel} = require("../model/ProfileModel");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Logging = (req,res)=>{
    const UserName = req.body['UserName'];
    const Password = req.body['Password'];

    ProfileModel.find({UserName:UserName, Password: Password},{},(error,data)=>{
        if (error){
            res.status(404).json({status: "UserName and Password wrong",data: error});
        }else {
            if (data.length > 0){
                // Json web token
                let Payload = {
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: data[0]
                }
                const token = jwt.sign(Payload,process.env.JWT_KEY);
                //============================//

                res.status(200).json({status: "Logging success",data: data,token: token});

            }else {
                res.status(401).json({status: "Unauthorized"});
            }
        }
    })
}

module.exports = {Logging};