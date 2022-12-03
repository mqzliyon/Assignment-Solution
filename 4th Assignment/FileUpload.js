const express = require('express');
const app = express();
const multer = require('multer');
const path = require("path");
const port = 8080;

// Multer DiskStorage
let storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./file_Uploads');
    },filename:(req,file,callback)=>{
        callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },

});

// Multer File Type Validation
let upload = multer({storage:storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
    }).single('img_file');

// Multer Error handling
app.get('/FileUpload',(req,res)=>{
    upload(req,res,(error)=>{
        if (error){
            res.status(400).json({status:'Failed',data:'File Upload Failed'});
        }else {
            res.status(200).json({status:'Success',data:'File Upload Success'});
        }
    })
})

// Port Listen
app.listen(port,()=>{
    console.log('Server run success');
})
