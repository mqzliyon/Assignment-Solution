const fileDownload = (req,res)=>{
    res.download('./file_Uploads/2.jpg')
}
module.exports = {fileDownload};