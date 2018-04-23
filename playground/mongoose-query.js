const {ObjectId}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/model/todo');

var id="5adc6eb3a09f1917282f68a9";

if(!ObjectId.isValid(id)){
    console.log('id is not valid');
}

Todo.find({_id:id}).then((res)=>{
    console.log("todos",res);
})

Todo.findOne({_id:id}).then((res)=>{
    console.log("todo",res);
})

Todo.findById({_id:id}).then((res)=>{
    if(!res){
        console.log('id not found');
    }
    console.log("todos by id",res);
}).catch((e)=>console.log(e));