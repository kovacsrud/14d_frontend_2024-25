const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const dotenv=require('dotenv').config();
const User=require('./model/User');
const cookieParser=require('cookie-parser');

const https=require('https');
const fs=require('fs');
const path=require('path');

const app=express();
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/user',require('./routes/userRoutes'));

const options={
    key:fs.readFileSync(path.join(__dirname+"/ssl","cert.key")),
    cert:fs.readFileSync(path.join(__dirname+"/ssl","cert.crt"))
}

const server=https.createServer(options,app);

mongoose.connect(process.env.MONGO_CONNECT).then(()=>console.log("Connected")).catch(err=>console.log(err));

server.listen(8000,()=>console.log("Fut a szerver."));

app.get('/',(req,res)=>{
    res.send("User regisztráció");
});





