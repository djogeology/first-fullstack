const classes=require("../database/models/classes");
module.exports={
    getAllClasses:function(req,res){
        classes.getAll(function(err,requests){
            if(err) res.status(500).send(err);
            else res.json(results)
        })
    },

    getOneClass:function(req,res) {
        const id= req.params.id;
        classes.getOne(id,function(err,results){
            if(err) res.status(500).send(err);
            else res.json(results)
        })
    },

   addClass:function(req,res){
    const {classname,classroom,capacity,image}=req.body;
    classes.add(classname,classroom,capacity,image,function(err,results){
        if (err) res.status(500).send(err);
        else res.json(results)
    })
   },
   updateClass: function(req,res){
    const{classname,classroom,capacity,image}=req.body;
    const id=req.params.id;
    classes.update(id,classname,classroom,capacity,image,function(err,results){
        if(err) res.status(500).send(err);
        else res.json(results)
   })},
   deleteClass:function(req,res){
    const id=req.params.id;
    classes.delete(id,function(err,results){
        if(err) res.status(500).send(err);
        else res.json(results)})}

}
