const conn=require('../index');
const classes=require('../../controllers/classes');

module.exports={
getAll:function(callback){
    const sql='SELECT * FROM `classes`'
    conn.query(sql,function(error,results,fields){
        callback(error,results)
    });
},
getOne: function(id,callback){
    const sql='SELECT * FROM `classes`WHERE `id`=?'
    conn.query(sql,[id],function (error,results,fields) {
        callback(error,results)
        
    })
},

add: function(classname,classroom,capacity,image,callback){
    const sql='INSERT INTO `classes`(classname,classroom,capacity,image) VALUES(?,?,?)'
    conn.query(sql,[classname,classroom,capacity,image],function(error,results,fields){
        if(error){
       return callback(error,results)}
       callback(null,results)
    })
},
update:function(id,classname,classroom,capacity,image,callback){
    const sql='UPDATE `classes` SET classname=?,classroom=?,capacity=?, image=? WHERE `id`=?'
    conn.query(sql,[classname,classroom,capacity,image,id],function(error,results,fields){
        if(error){
            return callback(error,results)}
            callback(null,results)
})},
delete:function(id,callback){
    const sql='DELETE FROM `classes` WHERE `id`=?'
    conn.query(sql,[id],function(error,results,fields){
        if(error){
            return callback(error,results)}
            callback(null,results)
    })}
}