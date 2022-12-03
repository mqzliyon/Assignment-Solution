const Header = (req, res)=>{
    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    res.status(200).json({status:'Success',FirstName: firstName,LastName: lastName});
}
module.exports = {Header};