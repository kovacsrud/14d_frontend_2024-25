const express=require('express');
const router=express.Router();
const {getImages,deleteimage}=require('../controllers/imageController');
const {protect}=require('../middleware/authMiddleware');


router.get('/',protect,getImages);
router.delete('/',deleteimage);

module.exports=router;