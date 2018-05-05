var {Users} = require("./../model/user.js");
var authenticate = (req,res,next)=>{
    var token = req.header('x-auth');

    console.log(token);

    Users.findByToken(token).then((user)=>{
        if(!user){
            return Promise.reject();
        }
        console.log('okkkkkkkkkk');
        //res.send(user);
        req.user=user;
        req.token=token;
        console.log(req.user," and ",req.token);
        next();
    }).catch ((e)=>{
        res.status(401).send();
    })
}


module.exports = {authenticate};