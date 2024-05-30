const conn=require('../index');
const teachers=require('../../controllers/teachers');
module.exports={

    getAll:function(callback){
        const sql='SELECT * FROM `teachers`'
        conn.query(sql,function(error,results,fields){
            callback(error,results)
        });
    },
    getOne: function(id,callback){
        const sql='SELECT * FROM `teachers`WHERE `id`=?'
        conn.query(sql,[id],function (error,results,fields) {
            callback(error,results)
            
        })
    },
    
    add: function(teachername,email,department,image,callback){
        const sql='INSERT INTO `teachers`(teachername,email,department,image) VALUES(?,?,?)'
        conn.query(sql,[teachername,email,department,image],function(error,results,fields){
            if(error){
           return callback(error,results)}
           callback(null,results)
        })
    },
    update:function(id,teachername,email,department,image,callback){
        const sql='UPDATE `teachers` SET teachername=?,email=?,department=?, image=? WHERE `id`=?'
        conn.query(sql,[teachername,email,department,image,id],function(error,results,fields){
            if(error){
                return callback(error,results)}
                callback(null,results)
    })},
    delete:function(id,callback){
        const sql='DELETE FROM `teachers` WHERE `id`=?'
        conn.query(sql,[id],function(error,results,fields){
            if(error){
                return callback(error,results)}
                callback(null,results)
        })}





}