const express=require('express');
const router=express.Router();
const {regisztracio,belepes,adatmodositas,vedett,kilepes}=require('../controllers/userController');
const {protect}=require('../middleware/authMiddleware');

router.post('/regisztracio',regisztracio);
router.post('/belepes',belepes);
router.patch('/adatmodositas',protect,adatmodositas);
router.get('/vedett',protect,vedett);
router.post('/kilepes',protect,kilepes);


module.exports=router;

