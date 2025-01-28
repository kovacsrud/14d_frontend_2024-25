const express=require('express');
const router=express.Router();
const {fileUpload}=require('../controllers/uploadController');
const {protect}=require('../middleware/authMiddleware');


router.post('/upload',protect,fileUpload);


module.exports=router;