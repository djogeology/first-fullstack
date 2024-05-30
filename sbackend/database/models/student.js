const conn=require('../index');
const student=require('../../controllers/student');
module.exports={

    getAll:function(callback){
        const sql='SELECT * FROM `student`'
        conn.query(sql,function(error,results,fields){
            callback(error,results)
        });
    },
    getOne: function(id,callback){
        const sql='SELECT * FROM `student`WHERE `id`=?'
        conn.query(sql,[id],function (error,results,fields) {
            callback(error,results)
            
        })
    },
    
    add: function(firstname,lastname,age,image,callback){
        const sql='INSERT INTO `student`(firstname,lastname,age,image) VALUES(?,?,?)'
        conn.query(sql,[firstname,lastname,age,image],function(error,results,fields){
            if(error){
           return callback(error,results)}
           callback(null,results)
        })
    },
    update:function(id,firstname,lastname,age,image,callback){
        const sql='UPDATE `student` SET firstname=?,lastname=?,age=?, image=? WHERE `id`=?'
        conn.query(sql,[firstname,lastname,age,image,id],function(error,results,fields){
            if(error){
                return callback(error,results)}
                callback(null,results)
    })},
    delete:function(id,callback){
        const sql='DELETE FROM `student` WHERE `id`=?'
        conn.query(sql,[id],function(error,results,fields){
            if(error){
                return callback(error,results)}
                callback(null,results)
        })}





}