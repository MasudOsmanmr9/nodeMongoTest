const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbname = 'TodoApp';

MongoClient.connect(url,(err,client)=>{

    if(err){
    return    console.log("Unable to connect mongodb server");
    }
console.log("connectd to mongodb server");
const db = client.db(dbname);

//deleteOne

// db.collection('users').deleteOne({username:"arif"}).then((result)=>{
//     console.log("deleted "+result.result.n +" documents");
// },  (err)=>{
//     console.log(err);
//    // return   console.log("couldn't find any data about "+username);
//   });


//deleteMany

// db.collection('users').deleteMany({username:"arif"}).then((result)=>{
//     console.log("deleted "+result.result.n +" documents");
// },  (err)=>{
//     console.log(err);
//    // return   console.log("couldn't find any data about "+username);
//   });

//findOneAndDelete

// db.collection('users').findOneAndDelete({username:"jamil"}).then((result)=>{
//     console.log("u have deleted :",result.value);
// },  (err)=>{
//     console.log(err);
//    // return   console.log("couldn't find any data about "+username);
//   });


 



 });


 //