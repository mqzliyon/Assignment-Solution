const {client} = require('./dbconfig');

client.connect((error,result)=>{
    if (error){
        console.log('Connection Failed');
    }else {
        console.log('Connection success');
        data_insert(result);
    }
});

//=========================== ****************** ===============================//

//============================ Data Insert Start ============================== //
const data_insert = (result)=>{
    let database = result.db('school');
    let collection = database.collection('teachers');
    let json_data = [
        {
          name:'Liyon',
          age:18,
          city:'Tangail'
        },
        {
            name:'Raihan',
            age:15,
            city:'Dhaka'
        },
        {
            name:'Rashed',
            age:20,
            city:'Gazipur'
        },
        {
            name:'Siam',
            age:22,
            city:'Mirzapure'
        },
        {
            name:'Anik',
            age:17,
            city:'Rangpur'
        }
    ]

    collection.insertMany(json_data,(error)=>{
        if (error) console.log('Data insert failed');
        else console.log('Data insert success');
    })
};

//============================ Data Insert End ============================== //
