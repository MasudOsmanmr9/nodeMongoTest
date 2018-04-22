var mongoose= require('mongoose');


var Todo = mongoose.model('todo',{
   text:{
       type : String,
       required:true
   },
   phone:{
     no1:{type :String,default:"null"},
     no2:{type :String,default:"null"}
   },
   compleated:{
       type:Boolean,
       default:false
   },
   compleatedAt:{
       type:Number,
       default:0
   }

});






module.exports = {Todo}