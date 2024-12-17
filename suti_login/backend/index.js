const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const jwt=require('jsonwebtoken');
const https=require('https');
const fs=require('fs');
const path=require('path');

const generateToken=(id)=>{
    return jwt.sign({id},'qwerty123',{expiresIn:"30m"});
}

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(
    {
        origin:'http://localhost:5173',
        credentials:true
    }
));
app.use(cookieParser());

const options={
    key:fs.readFileSync(path.join(__dirname+"/ssl","cert.key")),
    cert:fs.readFileSync(path.join(__dirname+"/ssl","cert.crt"))
}

const server=https.createServer(options,app);

server.listen(8000,()=>{console.log("Fut")});

app.get("/",(req,res)=>{
    res.send("HTTPS szerver");
});

app.get('/login',(req,res)=>{
    res.cookie('test','testsüti',{
        secure:true,
        httpOnly:true,
        sameSite:'none',   
        maxAge:360000     
    });
    const token=generateToken('0125563');
    res.cookie('token',token,{
        secure:true,
        httpOnly:true,
        sameSite:'none',   
        maxAge:360000     
    });
    res.json({message:"Belépés rendben!"});
});

app.get('/test',(req,res)=>{
    let message="";
    if(req.cookies.token){
        console.log(req.cookies.token);
        message=req.cookies.token;
    } else {
        message="Be kell jelentkezni";
    }
    res.json({message:message});
});