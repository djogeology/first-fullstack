const teachers=require('../database/models/teachers');
module.exports={

    getAllTeachers:function(req,res){
        teachers.getAll(function(err,results){
            if(err) res.status(500).send(err);
            else res.json(results)
        })
    },

    getOneTeacher:function(req,res) {
        const id= req.params.id;
        teachers.getOne(id,function(err,results){
            if(err) res.status(500).send(err);
            else res.json(results)
        })
    },

   addTeacher:function(req,res){
    const {teachername,email,department,image}=req.body;
    teachers.add(teachername,email,department,image,function(err,results){
        if (err) res.status(500).send(err);
        else res.json(results)
    })
   },
   updateTeacher: function(req,res){
    const{teachername,email,department,image}=req.body;
    const id=req.params.id;
    teachers.update(id,teachername,email,department,image,function(err,results){
        if(err) res.status(500).send(err);
        else res.json(results)
   })},
   deleteTeacher:function(req,res){
    const id=req.params.id;
    teachers.delete(id,function(err,results){
        if(err) res.status(500).send(err);
        else res.json(results)})}


}