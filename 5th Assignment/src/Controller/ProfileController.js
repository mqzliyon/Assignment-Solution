const {ProfileModel} = require("../model/ProfileModel");
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

module.exports = {CreateAccount,ProfileSelect};