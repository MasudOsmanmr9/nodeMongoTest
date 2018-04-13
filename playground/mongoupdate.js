const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbname = 'TodoApp';

MongoClient.connect(url,(err,client)=>{

    if(err){
    return    console.log("Unable to connect mongodb server");
    }
console.log("connectd to mongodb server");
const db = client.db(dbname);



//updateOne
var a=0;
var mob ="mobile.'"+a+"'.no2";
db.collection("users").findOneAndUpdate({
    username:"arif"
    //'_id.username':"arif" //if u use upserted with dotted id query then for the non existing field it will return like
    //lastErrorObject: { n: 1, updatedExisting: false, upserted: { username: 'arif' } }, 
},
{
    //$set:{age:"25",location:"lokkhipur,joydebpur","mobile.0":{no1:"234",no2:"123"}} //u can insert a new object or
    //     username:"arif",
    //     age:"25",
    //     location:'lokkhipur,joydebpur',
    //     age:'23',
    //  mobile:{no1:"1244",no2:"1234"}  //without $set u can upate but it will replace all old field with the new given field
    //  even it will remove th filter data find({username:"name"}) if u dont give it to in NON $set data 
    $set:{
       age:"25",
       location:'lokkhipur,joydebpur',
       age:'23',
    mobile:{no1:"1244",no2:"1234"}} //u can specify the array positions object's field name like "mobile.0.no1"
    //$set:{age:"25",location:"kathalbagan_dhal,banglamotor","mobile.no1":"01613959595"} //u can specyfy only objects field
},
// {
//     returnOriginal : false, //false return the new updated data true return the previous one 
// },
{
    upsert:true //prevent from inserting a non existing field at the time of update
}
).then((res)=>{
    console.log(res);
});



//cmd command
// db.users.save(
//     {
//         "_id" : new ObjectId("5acd0014a60e6d364cd6d98f"),
//         "username" : "khokon",
//         "location" : "titash gas",
//         "age" : "57",
//         "mobile" : "012333447"
//     }
// );


 });


 //