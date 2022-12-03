const Body = (req,res)=>{
    let reqBody = req.body;
    res.status(200);
    res.send(JSON.stringify(reqBody));
}
module.exports = {Body};