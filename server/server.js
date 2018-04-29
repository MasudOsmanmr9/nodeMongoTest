var env = process.env.NODE_ENV || "developmente";

console.log("env ************ ",env);
if(env === "development"){
process.env.PORT=3000;
process.env.MONGODB_URI = "mongodb://localhost:27017/mongoosetest"
}else if(env === "test"){
process.env.PORT=3000;
process.env.MONGODB_URI = "mongodb://localhost:27017/mongoosetestdemo"
}else{
    process.env.PORT=3000;
    process.env.MONGODB_URI = "mongodb://masudosman:masud009@ds255319.mlab.com:55319/mtest"
}

var express = require('express');
var bodyParser = require('body-parser');
const _=require('lodash');

const {ObjectId}=require('mongodb');
var {mongoose} = require("./db/mongoose");
var {Todo} = require("./model/todo.js");
var user = require("./model/user.js");

var app = express();
//const port = process.env.PORT || 3000;
const port = process.env.PORT ;

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
       },
    compleated:req.body.compleated
});

todo.save().then((docs)=>{
 res.status(200).send(docs);
},
(e)=>{
res.status(400).send(e);
});


app.get('/todos',(req,res)=>{

   // console.log("ha ha ha");
    Todo.find({}).then((docs)=>{
        res.send({docs})
    },(e)=>{
        res.status(400).send(e);
    })
});

app.get('/todos/:id',(req,res)=>{

    console.log("ja ja ja");
    var id=req.params.id;

    if(!ObjectId.isValid(id)){
      return  res.status(404).send();
    }

    Todo.findById({_id:id}).then((docs)=>{
       if(!docs){
        return  res.status(404).send();
       }
        res.send({docs})
    }).catch((e)=>{res.status(404).send();})
});


app.delete('/todos/:id',(req,res)=>{
     var id=req.params.id;
    // console.log(id);

     if(!ObjectId.isValid(id)){
       return  res.status(404).send("id formation is wrong,give valid id");
     }
     
     
     Todo.findByIdAndRemove(id).then((docs)=>{
       //  console.log("thiiiiiiiiissssss issssssssss :",docs);
         if(!docs){
             return res.status(404).send('this document dosen\'t exist');
         }
         res.send({docs});
     }).catch((e)=>{res.status(404).send();});
});

app.patch('/todos/:id',(req,res)=>{
var id = req.params.id;
var body=_.pick(req.body,['text',"phone",'compleated']);
console.log(body);
if(!ObjectId.isValid(id)){
    return  res.status(404).send();
  }

  if(_.isBoolean(body.compleated) && body.compleated){
      body.compleatedAt = new Date().getTime();
  } else {
      body.compleated = false;
      body.compleatedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set:body},{new:true}).then((todo)=>{
      if(!todo){
          return res.status(404).send();
      }

      res.send({todo});
  }).catch((e)=>{
      res.status(400).send();
  })
  
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


 app.listen(port,()=>{
     console.log(`started on port ${port}`);
 });

 module.exports ={app}