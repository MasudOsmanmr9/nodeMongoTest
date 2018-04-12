const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbname = 'TodoApp';

MongoClient.connect(url,(err,client)=>{

    if(err){
    return    console.log("Unable to connect mongodb server");
    }
console.log("connectd to mongodb server");
const db = client.db(dbname);

insertOne
data={
    username:"afran",
    location:"dhaka",
    age:"31",
    mobile:{
        no1:"0165685235",
        no2:"2234243432"
    }
}

db.collection("users").insertOne(data, {w : "majority"},(err,res)=>{
   if(err){
       return console.log("unable to insert data in this collection");
   }
  // console.log("inserted successfully :"+JSON.stringify(data,undefined,2));
   console.log(res);

});


//insertMany
// data=[
//     {
//         username:"asik",
//         location:"simultuli",
//         age:"23",
//         mobile:{
//             no1:"0168534355",
//             no2:"2334543432"
//         }
//     },
//     {
//         username:"khokon",
//         location:"titash gas",
//         age:"26",
//         mobile:{
//             no1:"0168534355",
//             no2:"2334543432"
//         }
//     },
//     {
//         username:"rafi",
//         location:"kola bagan",
//         age:"29",
//         mobile:{
//             no1:"0168534355",
//             no2:"2334543432"
//         }
//     },
//     {
//         username:"arif",
//         location:"chayabithi",
//         age:"26",
//         mobile:{
//             no1:"0168534355",
//             no2:"2334543432"
//         }
//     }
// ]
// db.collection('users').insertMany(data,(err,res)=>{
//     if(err){
//         return console.log("unable to insert multiple data for this operation ");
//     }
//     console.log(res);
// });




 });


 //