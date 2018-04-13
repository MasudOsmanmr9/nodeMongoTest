const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbname = 'TodoApp';

MongoClient.connect(url,(err,client)=>{

    if(err){
    return    console.log("Unable to connect mongodb server");
    }
console.log("connectd to mongodb server");
const db = client.db(dbname);

//insertOne

db.collection("users").find({username:{$regex:/^o/i}}).toArray().then((res)=>{
  console.log(res);
});

//skip(2).limit(3).toArray()
// db.collection('users').find({username:"osman"}).count(true,{skip:"2",limit:"3"}).then((count)=>{
//     console.log('users :'+count);
//    // console.log(JSON.stringify(res,undefined,3));
//   },(err)=>{
//     return console.log("can't fetch the data");
//   });

//LIKe

//find select username from users where username like %M%
// find({username:{$regex:/^M/i}}) find({username:{$regex:/M$/i}}) find({username:{$regex:/M/i}})
//find({username:{$regex:/M/i}}) find any where in a single line/multy line string
// find({username:{$regex:/^M/i(i indicate find Case insensitivity)}})  
//find({username:{$regex:/M$/m(^(from first) And $(from last) search cahrecters but m allow this to work on multi line)}})
// db.collection('users').find({username:{$regex:/y$/i}}).toArray().then((resolve)=>{
     
//     // console.log("datas about"+username+" :"+JSON.stringify(res,undefined,2));
//     console.log(JSON.stringify(resolve,undefined,2));
// });

//compare
// find({age:{$lte:"21"}})
// find({age:{$gte:"21"}})
// find({age:{$lt:"21"}})
// find({age:{$gt:"21"}})
// find({age:{$ne:"21"}})
// age is not equal 21 and less then or equal 23 username like ma location in rajbari or krisi
//find({age:{$ne:"21",$lte:"23"},username:{$regex:/ma/i},location:{$in:["rajbari","krisi,Gazipur"]}})

//findorderby
//find({}).sort({age:1}) 1 will return asc -1 will return desc
//find({})._addSpecial("orderby",{age:-1}) 1 will return asc -1 will return desc
//find({}).sort({age:-1}).limit(2 or 2^31) limit used to maintain how many data will return limit range is (2^-31)-(2^31)


 });


 //