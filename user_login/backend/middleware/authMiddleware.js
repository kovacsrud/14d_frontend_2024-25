const jwt=require('jsonwebtoken');
const User=require('../model/User');
const mongoose=require('mongoose');

const protect=async (req,res,next)=>{
    let token;

  
    console.log(req.cookies.token);

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer') || req.cookies.token){
        //token ellenőrzés
        try {
            if(req.cookies.token)    {
                token=req.cookies.token;
            } else {
                token=req.headers.authorization.split(' ')[1];
            }

            
            const idFromtoken=jwt.verify(token,process.env.JWT_SECRET);
            req.user=await User.findById(idFromtoken.id).select('-password');
            next();
            
        } catch (error) {
            return res.status(401).json({message:"Be kell jelentkezni!"});
        }

    }
    if(!token){
        return res.status(401).json({message:"Be kell jelentkezni!"});
    }

}


module.exports={protect};