const UrlQuery = (req,res)=>{
    let firstName = req.query['firstName'];
    let lastName = req.query['lastName'];
    res.status(200).json({status:'Success',FirstName: firstName,LastName: lastName});
}
module.exports = {UrlQuery}