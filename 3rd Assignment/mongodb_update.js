const {client} = require('./dbconfig');

client.connect((error,result)=>{
    if (error){
        console.log('Connection failed')
    }else {
        console.log('Connection success');
        updateOne(result);
        updateMany(result);
    }
});

//================================ ************************ ================================//

//================================= Update One =================================//
const updateOne = (result)=>{
    let databaseName = result.db('school');
    let databaseCollection = databaseName.collection('teachers');
    let myQuery = {name:"Siam"}
    let newData = {$set: {name: 'Rakib', age:29, city:'Gurai'}};
    databaseCollection.updateOne(myQuery,newData,(error)=>{
        if (error){
            console.log('Data update failed');
        }else {
            console.log('Data update success');
        }
    })
}
//================================= Update One End =================================//

//================================ ************************ ================================//

//================================= Update Many =================================//
const updateMany = (result)=>{
    let databaseName = result.db('school');
    let databaseCollection = databaseName.collection('teachers');
    let myQuery = {name: "Anik"}
    let newQuery = {$set: {name:"Faisal"}}
    databaseCollection.updateMany(myQuery,newQuery,(error)=>{
        if (error){
            console.log('Data Update Failed');
        }else {
            console.log('Data Update Success');
        }
    })
}
//================================= Update Many End =================================//