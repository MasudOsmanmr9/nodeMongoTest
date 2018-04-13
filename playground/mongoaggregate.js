const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
if(err){
    return console.log("unable to connect the Mongodb server");

}

console.log("Connected to MongoDb server");
const db = client.db(dbName);


//skip(2).limit(3).toArray()

//this shows in krisi,gazipur there are peoples who have same name .find minimum age person in every same name group

db.collection('users').aggregate([{ $match: { location: "krisi,Gazipur" }},{$group:{_id:"$username",MinAge:{$min:"$age"}}},{$sort:{MinAge:-1}},{ $limit: 20 }])
.toArray().then((res)=>{
  console.log(res);
 // console.log(JSON.stringify(res,undefined,3));
},(err)=>{
  return console.log("can't fetch the data");
});

//aggregation
//.aggregate([{$group:{_id:"$username",MaxAge:{$max:"$age"}}},{ $sort: { MaxAge: -1 }},{ $limit: 4 }])
//The $match and $sort pipeline operators can take advantage of an aggrgate array index 
//when they occur at the beginning of the pipeline. like
//aggregate([{ $match: { location: "krisi,Gazipur" }},{$group:{_id:"$username",MinAge:{$min:"$age"}}},{$sort:{MinAge:-1}},{ $limit: 20 }])
//this shows in krisi,gazipur there are peoples who have same name .find minimum age person in every same name group
//and sort them in descending order

//db.collection("todos")""
client.close();
});

