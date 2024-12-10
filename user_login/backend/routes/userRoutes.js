const express=require('express');
const router=express.Router();
const {regisztracio,belepes,adatmodositas,vedett}=require('../controllers/userController');
const {protect}=require('../middleware/authMiddleware');

router.post('/regisztracio',regisztracio);
router.post('/belepes',belepes);
router.patch('/adatmodositas',protect,adatmodositas);
router.get('/vedett',protect,vedett);


module.exports=router;

