const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../model/todo');


beforeEach((done)=>{
    console.log("5th");
    Todo.remove({}).then(()=>{done()})
})

describe('post /todos',()=>{
    
        
      var  text="dinner is ready";
        
    var phone={no1:"12345",no2:"231"};
    var compleated=true;

    it('should creaat a new todo',(done)=>{
      
        console.log("1st");

        request(app)
         .post('/todos')
         .send({text,phone,compleated})
         .expect(200)
         .expect((res)=>{
             expect(res.body.text).toBe(text);
         })
         .end((err,res) =>{
             if(err){
                 return done(err);
             }

             Todo.find().then((todos)=>{
                 expect(todos.length).toBe(todos.length);
                 expect(todos[0].text).toBe(text);
                 console.log("2nd");
                 done();
             }).catch((e)=>{
               done(e);
             })
         }) 
    });

    it('should not creat a new todo',(done)=>{
      
        console.log("3rd");

        request(app)
         .post('/todos')
         .send({phone})
         .expect(400)
         .end((err,res) =>{
             if(err){
                 return done(err);
             }

             Todo.find().then((todos)=>{
                 expect(todos.length).toBe(0);
                 //expect(todos[0].text).toBe(text);
                 console.log("4th");
                 done();
             }).catch((e)=>{
                
               done(e);
             })
         }) 
    });
})