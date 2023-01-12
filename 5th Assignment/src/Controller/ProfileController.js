const {ProfileModel} = require("../model/ProfileModel");
const jwt = require("jsonwebtoken");
const CreateAccount = (req,res)=>{
    const reqBody = req.body;
    ProfileModel.create(reqBody,(error,data)=>{
        if (error){
            res.status(400).json({status: 'Profile not create',data: error.message});
        }else {
            res.status(201).json({status: 'Profile create success',data: data});
        }
    })
}


const Logging = (req,res)=>{
    const UserName = req.body['UserName'];
    const Password = req.body['Password'];

    ProfileModel.find({UserName:UserName, Password: Password},(error,data)=>{
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


const ProfileSelect = (req,res)=>{
    const Username = req.headers['username']
    ProfileModel.find({Username: Username},(error,data)=>{
        if (error){
            res.status(401).json({status: 'Unauthorized',data: error});
        }else {
            res.status(200).json({status: 'Success',data: data});
        }
    })
}


const UpdateProfile = (req,res)=>{
    let UserName = req.headers['UserName'];
    let reqBody = req.body;
    res.json(reqBody);
}

module.exports = {CreateAccount,Logging,ProfileSelect,UpdateProfile};