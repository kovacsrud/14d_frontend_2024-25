const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const dotenv=require('dotenv').config();
const User=require('./model/User');

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/user',require('./routes/userRoutes'));

mongoose.connect(process.env.MONGO_CONNECT).then(()=>console.log("Connected")).catch(err=>console.log(err));

app.listen(8000,()=>console.log("Fut a szerver."));

app.get('/',(req,res)=>{
    res.send("User regisztráció");
});





