const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        minLength:3,
        required:[true,"Meg kell adni usernevet!"],
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        minLength:8,
        required:[true,"Meg kell adni a jelszót!"]
    },
    email:{
        type:String,
        minLength:7,
        required:[true,"Meg kell adni az email címet!"],
        lowercase:true,
        unique:true
    },
    age:{
        type:Number,
        min:12,
        max:100
    }
});

module.exports=mongoose.model('User',userSchema);