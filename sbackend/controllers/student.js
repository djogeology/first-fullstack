const student=require('../database/models/student');
module.exports={

    getAllStudents:function(req,res){
        student.getAll(function(err,results){
            if(err) res.status(500).send(err);
            else res.json(results)
        })
    },

    getOneStudent:function(req,res) {
        const id= req.params.id;
        student.getOne(id,function(err,results){
            if(err) res.status(500).send(err);
            else res.json(results)
        })
    },

   addStudent:function(req,res){
    const {firstname,lastname,age,image}=req.body;
    student.add(firstname,lastname,age,image,function(err,results){
        if (err) res.status(500).send(err);
        else res.json(results)
    })
   },
   updateStudent: function(req,res){
    const{firstname,lastname,age,image}=req.body;
    const id=req.params.id;
    student.update(id,firstname,lastname,age,image,function(err,results){
        if(err) res.status(500).send(err);
        else res.json(results)
   })},
   deleteStudent:function(req,res){
    const id=req.params.id;
    student.delete(id,function(err,results){
        if(err) res.status(500).send(err);
        else res.json(results)})}






}