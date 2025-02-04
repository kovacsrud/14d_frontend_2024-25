const fs=require('fs');
const mongoose=require('mongoose');
const {dirname}=require('path');
const appDir=dirname(require.main.filename);
const Image=require('../model/Image');
const ImageBin=require('../model/ImageBin');

const getImages= async (req,res)=>{
    const images=await Image.find({userid:req.user._id});

    if(!images){
        return res.json({message:"Nincsenek feltöltött képek"});
    }

    res.json({path:"/files/"+req.user.username+"/",images:images});

}

const getImagesBin=async (req,res)=>{
    const images=await ImageBin.find({userid:req.user._id});

    if(!images){
        return res.json({message:"Nincsenek feltöltött képek"});
    }

    res.json(images);

}



const deleteImageBin=async (req,res)=>{
    const {imageId}=req.body;
    const image=await ImageBin.findById(imageId);

    if(!image){
        return res.json({message:"A kép nem törölhető!"})
    }
    try {
        await ImageBin.findOneAndDelete({userid:req.user._id,_id:imageId});
        return res.json({message:"A kép törölve!"})
        
    } catch (error) {
        return res.json({message:error})
    }

}

const deleteimage= async (req,res)=>{
    const {imageId}=req.body;
    const image=await Image.findById(imageId);

    if(!image){
        return res.json({message:"A kép nem törölhető!"})
    }

    const path=appDir+"/files/"+req.user.username+"/";
    if(fs.existsSync(path+image.imageName)){
        try {
            await Image.findByIdAndDelete({userid:req.user._id,_id:imageId});
            await fs.rm(path+image.imageName,()=>{console.log("Törlés:"+imageId)});
            return res.json({message:"Fájl törölve:"+image.imageName});
            
        } catch (error) {
            return res.json({message:error})
        }

    }
    
}

module.exports={
    getImages,
    deleteimage,
    deleteImageBin,
    getImagesBin
}
