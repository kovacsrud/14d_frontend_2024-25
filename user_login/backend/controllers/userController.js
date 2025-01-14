const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const User=require('../model/User');
const jwt=require('jsonwebtoken');


const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1h"});
}


const regisztracio=async (req,res)=>{
    const {username,password,email,age}=req.body;
    //1. User felhasználónév ellenőrzése
    const user=await User.findOne({username:username});
    if(user){
        return res.status(400).json({message:"A felhasználói név foglalt!"})
    }
    //2.e-mail cím ellenőrzése
    const e_mail=await User.findOne({email:email});
    if(e_mail){
        return res.status(400).json({message:"Ezzel az email címmel már regisztráltak!"});
    }
    //3.Adatok meglétének ellenőrzése
    if(!username || !password || !email){
        return res.status(400).json({message:"Hiányos adatok!"});
    }
    //4. Jelszó hash létrehozása
    const hashedPassword=await bcrypt.hash(password,10);
    const ujUser=await User.create({
        username:username,
        password:hashedPassword,
        email:email,
        age:age
    });

    
    const token=generateToken(ujUser.id);

    res.cookie('token',token,{
        secure:true,
        httpOnly:true,
        sameSite:'none',
        maxAge:360000
    });

    return res.json(token);

}

const belepes=async (req,res)=>{
    const{username,password}=req.body;
    const user=await User.findOne({username:username});
    if(!user){
        return res.status(400).json({message:"Nincs ilyen felhasználó!"});
    }
    if(!await bcrypt.compare(password,user.password)){
        return res.status(400).json({message:"A jelszó nem megfelelő!"});
    }

    const token=generateToken(user.id);

    
    res.cookie('token',token,{
        secure:true,
        httpOnly:true,
        sameSite:'none',
        maxAge:360000
    });

    
    return res.status(200).json(token);

}

const adatmodositas=async (req,res)=>{
    const{_id,email,password,age}=req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(400).json({message:"Hibás Id"});
    }

    const user=await User.findById(_id);
    if(!user){
        return res.status(400).json({message:"A felhasználó nem található!"});
    }
    if(!await bcrypt.compare(password,user.password)){
        return res.status(400).json({message:"A jelszó nem megfelelő!"});
    }

    await User.findByIdAndUpdate(_id,{age});

    return res.status(200).json(await User.findById(_id));

}

const kilepes=async (req,res)=>{
    res.clearCookie('token',{
        httpOnly:true,
        secure:true,
        sameSite:'none'
    });
    res.status(200).json({message:"Kijelentkezve"});
}

const vedett=async (req,res)=>{
    const username=req.user.username;

    const token=generateToken(req.user.id);

    
    res.cookie('token',token,{
        secure:true,
        httpOnly:true,
        sameSite:'none',
        maxAge:360000
    });
    
    res.json(req.user);
}

module.exports={
    regisztracio,
    belepes,
    adatmodositas,
    vedett,
    kilepes
}