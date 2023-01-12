const {app} = require("./app");
app.listen(process.env.PORT,()=>{
    console.log(`App run ${process.env.PORT}`);
})