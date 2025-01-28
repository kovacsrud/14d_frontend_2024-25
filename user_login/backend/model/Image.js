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
    }

});

module.exports=mongoose.model('Image',imageSchema);