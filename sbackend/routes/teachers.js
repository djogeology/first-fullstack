const express=require('express');
const router=express.Router();
const{getAllTeachers, addTeacher,getOneTeacher,updateTeacher,deleteTeacher}=require('../controllers/teachers')
router.get('/getAll',getAllTeachers);
router.post('/add',addTeacher)
router.get('/:id',getOneTeacher)
router.put('/:id',updateTeacher)
router.delete('/:id',deleteTeacher)

module.exports=router;