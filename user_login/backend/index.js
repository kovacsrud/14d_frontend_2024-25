const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const dotenv=require('dotenv').config();
const User=require('./model/User');
const cookieParser=require('cookie-parser');
const fileUpload=require('express-fileupload');

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
app.use(fileUpload());
app.use('/files',express.static(path.join(__dirname,'files')));
app.use('/api/user',require('./routes/userRoutes'));
app.use('/api/files',require('./routes/uploadRoutes'));
app.use('/api/images',require('./routes/imageRoutes'));


const options={
    //key:fs.readFileSync(path.join(__dirname+"/ssl","cert.key")),
    //cert:fs.readFileSync(path.join(__dirname+"/ssl","cert.crt"))
    key:fs.readFileSync(path.join(__dirname+"/ssl","localhost-key.pem")),
    cert:fs.readFileSync(path.join(__dirname+"/ssl","localhost.pem"))
}

const server=https.createServer(options,app);

mongoose.connect(process.env.MONGO_CONNECT).then(()=>console.log("Connected")).catch(err=>console.log(err));

server.listen(8000,()=>console.log("Fut a szerver."));

app.get('/',(req,res)=>{
    res.send("User regisztráció");
});





