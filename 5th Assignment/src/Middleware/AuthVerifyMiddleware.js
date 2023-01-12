const jwt = require('jsonwebtoken')
require('dotenv').config();
const AuthVerifyMiddleware = (req,res,next)=>{
    let token = req.headers['token'];
    jwt.verify(token,process.env.JWT_KEY,(error,decoded)=>{
        if (error){
            res.status(401).json({data: error});
        }else {
            let username = decoded['data']['UserName']
            req.headers.username = username;
            next();
        }
    })
}

module.exports = {AuthVerifyMiddleware};