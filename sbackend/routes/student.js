const express=require('express');
const router=express.Router();
const{getAllStudents, addStudent,getOneStudent,updateStudent,deleteStudent}=require('../controllers/student')
router.get('/getAll',getAllStudents);
router.post('/add',addStudent)
router.get('/:id',getOneStudent)
router.put('/:id',updateStudent)
router.delete('/:id',deleteStudent)

module.exports=router;