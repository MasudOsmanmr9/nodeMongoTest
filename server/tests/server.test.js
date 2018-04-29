const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../model/todo');


beforeEach((done)=>{
    console.log("5th");
    Todo.remove({text:"dinner is ready"}).then(()=>{done()})
})

describe('post /todos',()=>{
    
        
      var  text="dinner is ready";
        
    var phone={no1:"12345",no2:"231"};
    var compleated=true;
   
    it('should creaat a new todo',(done)=>{
        var test;
        console.log("1st");

        request(app)
         .post('/todos')
         .send({text,phone,compleated})
         .expect(200)
         .expect((res)=>{
            // console.log(res.body);
            test=res.body.text;
             expect(res.body.text).toBe(text);

         })
         .end((err,res) =>{
             if(err){
                 return done(err);
             }

             Todo.find().then((todos)=>{
                 expect(todos.length).toBe(todos.length);
                 expect(test).toBe(text);
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
                 expect(todos.length).toBe(todos.length);
                 //expect(todos[0].text).toBe(text);
                 console.log("4th");
                 done();
             }).catch((e)=>{
                
               done(e);
             })
         }) 
    });
})

describe('Get /todos',()=>{
    it('shold get all todos',(done)=>{
        request(app)
    .get('/todos')
    .expect(200)
    .expect((res)=>{
      //  console.log('OKKKKKKKKKKAAAAAAAAAAy  :',res.body.docs);
        expect(res.body.docs.length).toBe(res.body.docs.length)
    })
    .end(done)

    });
})

describe('DELETE /todos/:id,',()=>{
    it('should delete a todo by id',(done)=>{
        request(app)
        .delete('/todos/5adecc9c530f432f20eafe7a')
        .expect(200)
        .expect((res)=>{
           // console.log("res  is printing :",res.body.docs);
            expect(res.body.docs.compleated).toBe(false);
            //console.log("res.body.docs :",res.body.docs);
        })
        .end(done)
    })
    it('should not delete a unexist id',(done)=>{
        request(app)
        .delete('/todos/5adecc9c530f432f20eafe7a')
        .expect(404)
        .expect((res)=>{
           // expect(res.body.docs.length).toBe(1);
           // console.log("res.body.docs :",res.body.docs);
        })
        .end(done)
    })
})