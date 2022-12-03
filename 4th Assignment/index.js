const {app} = require("./app");
const port = 8080;

// Port Listen
app.listen(port,()=>{
    console.log('Server run success');
})