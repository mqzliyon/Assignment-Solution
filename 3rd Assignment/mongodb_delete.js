const {client} = require('./dbconfig');

client.connect((error,result)=>{
    if (error){
        console.log('Connection failed');
    }else {
        console.log('Connection success');
        dataDeleteOne(result)
        databaseDeleteMany(result);
    }
});

//================================ ************************ ================================//

//================================= Mongodb Delete One =================================//
const dataDeleteOne = (result)=>{
    let databaseName = result.db('school');
    let dataCollectionName = databaseName.collection('teachers');
    console.log(dataCollectionName);
    let myQuery = {age:18};
    dataCollectionName.deleteOne(myQuery,(error)=>{
        if (error){
            console.log('Data Delete Failed');
        }else {
            console.log('Data Delete Success')
        }
    })
};
//================================= Mongodb Delete One End =================================//

//================================ ************************ ================================//

//================================= Mongodb Delete Many =================================//
const databaseDeleteMany = (result)=>{
  let databaseName = result.db('school');
  let databaseCollection = databaseName.collection('teachers');
  let myQuery = {age:15}
  databaseCollection.deleteMany(myQuery,(error)=>{
    if (error){
        console.log('Data Delete failed');
    }  else {
        console.log('Data delete success');
    }
  })
};
//================================= Mongodb Delete Many End =================================//