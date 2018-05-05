var mongoose= require('mongoose');
var validator =require('validator');
var jwt = require('jsonwebtoken');
const _=require('lodash');
const bcrypt= require('bcryptjs');

var UserSchema = new mongoose.Schema({
    // username:{
    //     type : String,
    //     required:true
    // },
    // age:{
    //     type:Number,
    //     required:true,
        
    // },
    // location:{
    //     type:String,
    //     required:true,
    //     default:null
    // },
    // height:{
    //   type:Number,
    //   required:true,
    //   default:null
    // },
    email:{
     type:String,
     required:true,
     trim:true,
     minlength:1,
     unique:true,
     validate:{
         validator:validator.isEmail,
         message: '{VALUE} is not a valid email'
     }
     },
   // phone:{no1:{type:"string",required:true},no2:{type:"string",required:true}},

    password:{
     type:String,
     required:true,
     minlength:1
    },
    tokens:[{
        access:{
            type:String,
            required:true,
        },
        token:{
            type:String,
            required:true,
        }
    }]
  
 });

UserSchema.methods.toJSON = function(){
   var user=this;
   var userObject=user.toObject();
   return _.pick(userObject,['email','password']);
}

UserSchema.methods.generateAuthToken = function(){
    var user = this;
    var access = 'auth';
    var token =jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();

    user.tokens.push({access,token});
   // user.tokens = user.tokens.concat([{access,token}]);

    return user.save().then(()=>{
        return token;
    })

} 

UserSchema.statics.findByToken = function(token){
    var User = this;
    var decoded;

    try{
        decoded = jwt.verify(token,'abc123');
    }catch(e){
    // return new Promise((resolve,reject)=>{
    //     reject();
    // });
    return Promise.reject();
    }
    return User.findOne({
        '_id':decoded._id,
        'tokens.token':token,
        'tokens.access':'auth'

    });
};

UserSchema.pre('save',function(next){
    var user = this;

    if(user.isModified('password')){
       bcrypt.genSalt(10,(err,salt)=>{
         bcrypt.hash(user.password,salt,(err,hash)=>{
             user.password = hash;
             next();
         });
       });
    }else{
        next();
    }
});
var Users = mongoose.model('users',UserSchema);

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

 
module.exports = {Users}