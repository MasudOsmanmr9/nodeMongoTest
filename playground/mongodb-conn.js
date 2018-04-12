const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
if(err){
    return console.log("unable to connect the Mongodb server");

}

console.log("Connected to MongoDb server");
const db = client.db(dbName);

// db.collection('todos').insertOne({
//     username:"Masud",
//     password:"1234",
//     completed:false
// },(err,res)=>{
//  if(err){
//      return console.log("unable to insert on todos collection and the reason is :"+err);
//  }
//  console.log("successfully inserted",JSON.stringify(res.ops,undefined,2));
// });

// 
//skip(2).limit(3).toArray()
db.collection('users').find({username:"osman"}).count(true,{skip:"2",limit:"3"}).then((count)=>{
  console.log('users :'+count);
 // console.log(JSON.stringify(res,undefined,3));
},(err)=>{
  return console.log("can't fetch the data");
});


//db.collection("todos")""
client.close();
});

