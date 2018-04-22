var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./model/todo.js");
var user = require("./model/user.js");
//    db.collection.updateMany(
//     { <query conditions> },
//     { <update operator>: { "<array>.$[<identifier>]" : value } },
//     { arrayFilters: [ { <identifier>: <condition> } } ] }
//  )
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{

  // console.log(req.body.phone.no1);

   var todo = new Todo({
    text : req.body.text,
    phone:{
           no1:req.body.phone.no1,
           no2:req.body.phone.no2
       }
    
});

todo.save().then((docs)=>{
 res.status(200).send(docs);
},
(e)=>{
res.status(400).send(e);
});

//  Todo.findOneAndUpdate(
//     {_id:req.body.id},
//     { $set: {
//         text:req.body.text,
//         "phone.no1":req.body.phone.no1,
//         "phone.no2":req.body.phone.no2
    
//     } },
    //{ arrayFilters: [ { <identifier>: <condition> } } ] }
//     {returnOrginal:true},
    
//  ).then((res)=>{
//     console.log(res);
// },(e)=>{
//     console.log(e);
// });

});


 app.listen(3000,()=>{
     console.log("started on port 3000");
 });

 module.exports ={app}