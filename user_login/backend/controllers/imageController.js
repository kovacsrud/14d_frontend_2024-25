const fs=require('fs');
const mongoose=require('mongoose');
const {dirname}=require('path');
const appDir=dirname(require.main.filename);
const Image=require('../model/Image');

const getImages= async (req,res)=>{
    const images=await Image.find({userid:req.user._id});

    if(!images){
        return res.json({message:"Nincsenek feltöltött képek"});
    }

    res.json({path:"/files/"+req.user.username+"/",images:images});

}

const deleteimage= async (req,res)=>{

}

module.exports={
    getImages,
    deleteimage
}
