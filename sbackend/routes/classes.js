const express=require('express');
const router=express.Router();
const{getAllClasses, addClass,getOneClass,updateClass,deleteClass}=require('../controllers/classes')
router.get('/getAll',getAllClasses);
router.post('/add',addClass)
router.get('/:id',getOneClass)
router.put('/:id',updateClass)
router.delete('/:id',deleteClass)

module.exports=router;