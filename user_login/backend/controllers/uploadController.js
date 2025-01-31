const fs=require('fs');
const {dirname}=require('path');
const appDir=dirname(require.main.filename);
const Image=require('../model/Image');

const fileUpload=async (req,res)=>{

    if(!req.files){
        return res.json({message:"Nincs feltöltött fájl!"})
    }

    if(req.files){
        console.log(req.files);
        const path=appDir+"/files/";
        if(!fs.existsSync(path+req.user.username)){
            fs.mkdir(path+req.user.username,err=>{console.log(err)});
        }
        for(prop in req.files){
            const image=await Image.findOne({userid:req.user._id,imageName:req.files[prop].name});
            if(image){
                return res.json({message:req.files[prop].name+" kép már lett feltöltve!"});
            }
            
            try {
                await fs.writeFile(path+req.user.username+"/"+req.files[prop].name,req.files[prop].data,err=>{console.log(err)});
                const ujImage=await Image.create({
                    userid:req.user._id,
                    imageName:req.files[prop].name
                });
                
            } catch (error) {
                //return res.json({message:error})
                console.log(err);
            }
        }
        
    }

    res.json({message:"Feltöltés kész!"});

}

module.exports={fileUpload};