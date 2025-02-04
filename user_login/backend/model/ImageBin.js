const mongoose=require('mongoose');

const imageSchema=new mongoose.Schema({
    userid:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    imageName:{
        type:String,
        minLength:5,
        required:[true,"A fájlnevet meg kell adni!"]
    },
    imageData:{
        type:Buffer,
        required:[true]
    }

});

module.exports=mongoose.model('ImageBin',imageSchema);