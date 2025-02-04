const express=require('express');
const router=express.Router();
const {getImagesBin,deleteImageBin}=require('../controllers/imageController');
const {storeImages}=require('../controllers/uploadController');

const {protect}=require('../middleware/authMiddleware');


router.get('/',protect,getImagesBin);
router.post('/',protect,storeImages);
router.delete('/',protect,deleteImageBin);

module.exports=router;