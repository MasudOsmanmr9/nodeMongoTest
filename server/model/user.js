var mongoose= require('mongoose');

var users = mongoose.model('users',{
    username:{
        type : String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        
    },
    location:{
        type:String,
        required:true,
        default:null
    },
    height:{
      type:Number,
      required:true,
      default:null
    },
    email:{
     type:String,
     required:true
    },
    phone:{no1:{type:"string",required:true},no2:{type:"string",required:true}},

    password:{
     type:String,
     required:true
    }
 
 });

//  var users = new users({
//     username:"ashraf hossain",
//     age:26,
//     location:"joydebpur,gazipur",
//     height:5.2,
//     email:"ashraf@gmail.com",
//     phone:{no1:"12323123",no2:"353434524"},
//     password:"12345"
    
// });

//  users.findOneAndUpdate(
//     {username:"masud osman"},
//     { $set: {gender:"male" } },
//     //{ arrayFilters: [ { <identifier>: <condition> } } ] }
//    // {returnOrginal:true},
    
//  ).then((res)=>{
//     console.log(res);
// },(e)=>{
//     console.log(e);
// });

// users.save().then((doc)=>{
//     console.log("saved user",doc);
// },(err)=>{
//     console.log(err.message);
// });

 
module.exports = {users}