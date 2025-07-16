const express=require('express');
const app=express();
const sqlite3=require('sqlite3');
//const Joi=require('joi');
const xss=require('xss');
const path=require('path');
const { check, body, validationResult } = require('express-validator');
const kutyanevSchema=require('./validation_schemas/kutyanevSchema');
const dbName="kutyak_good_unique.db";
const dbUtvonal=path.join(__dirname,dbName);
//const db=new sqlite3.Database('./kutyak_good_unique.db');
const db=new sqlite3.Database(dbUtvonal);
const cors=require('cors');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.listen(8000,()=>{console.log("Fut a szerver")});

db.get("PRAGMA foreign_keys = ON");

app.get('/',(req,res)=>{
    res.send("Kutya adatbázis");
});

app.get('/kutyanevek',(req,res)=>{
    db.all("select * from kutyanevek",(err,rows)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json(rows);
        }
    })
});

app.post('/kutyanevek',
    body('kutyanev').isLength({min:2,max:50}).withMessage("Min 2, max 50 karakter a kutyanév!").trim().escape(),
    (req,res)=>{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let errorText=""
            errors.array().map(e=>errorText+=e.msg);
            return res.status(400).json({ errors: errorText })
            //return res.status(400).json({ errors: errors.array() });
        }
       

        const kutyanev=xss(req.body.kutyanev);


        db.run("insert into kutyanevek (kutyanev) values(?)"
            ,[kutyanev],(err)=>{
                if(err){
                    res.status(400).send(err);
                } else {
                    res.status(200).json({message:"Adat beszúrva!"})
                }
        })
});

app.patch('/kutyanevek',
    body('kutyanev').isLength({min:2,max:50}).withMessage("Min 2, max 50 karakter a kutyanév!").trim().escape(),
    body('Id').isNumeric().withMessage("Az azonosítónak számnak kell lennie!").trim().escape(),
    (req,res)=>{
    //const{Id,kutyanev}=req.body;
      const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let errorText=""
            errors.array().map(e=>errorText+=e.msg);
            return res.status(400).json({ errors: errorText })
            //return res.status(400).json({ errors: errors.array() });
        }
    const Id=xss(req.body.Id);
    const kutyanev=xss(req.body.kutyanev);
    
    db.run("UPDATE kutyanevek SET kutyanev=? WHERE Id=?"
    ,[kutyanev,Id]
    ,(err)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json({message:"Adat módosítva!"})
        }
    });
});

app.delete('/kutyanevek',
    body('Id').isNumeric().withMessage("Az azonosítónak számnak kell lennie!").trim().escape(),
    (req,res)=>{
   //const{Id}=req.body;
   const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let errorText=""
            errors.array().map(e=>errorText+=e.msg);
            return res.status(400).json({ errors: errorText })
            //return res.status(400).json({ errors: errors.array() });
        }
    const Id=xss(req.body.Id);

   db.run("DELETE FROM kutyanevek WHERE Id=?"
   ,[Id]
   ,(err)=>{
        if(err){
            res.status(400).send(err.stack);
        } else {
            res.status(200).json({message:"Adat törölve!"})
        }

   }); 
});


app.get('/kutyafajtak',(req,res)=>{
    db.all("select * from kutyafajtak",(err,rows)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json(rows);
        }
    })
});

app.post('/kutyafajtak',(req,res)=>{
    
    db.run("insert into kutyafajtak (nev,eredetinev) values(?,?)"
    ,[req.body.nev,req.body.eredetinev],(err)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json({message:"Adat beszúrva!"})
        }
    })
})

app.patch('/kutyafajtak',(req,res)=>{
    const{Id,nev,eredetinev}=req.body;
    
    db.run("UPDATE kutyafajtak SET nev=?,eredetinev=? WHERE Id=?"
    ,[nev,eredetinev,Id]
    ,(err)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json({message:"Adat módosítva!"})
        }
    });
});

app.delete('/kutyafajtak',(req,res)=>{
   const{Id}=req.body;
   db.run("DELETE FROM kutyafajtak WHERE Id=?"
   ,[Id]
   ,(err)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json({message:"Adat törölve!"})
        }

   }); 
});

app.get('/kutyak',(req,res)=>{
    db.all(`SELECT 
            kutya.Id,
            kutya.fajtaid,
            kutya.nevid,
            kutya.eletkor,
            kutya.utolsoell,
            kutyanevek.kutyanev,
            kutyafajtak.nev,
            kutyafajtak.eredetinev
            FROM kutya
            INNER JOIN kutyanevek ON kutya.nevid=kutyanevek.Id
            INNER JOIN kutyafajtak ON kutya.fajtaid=kutyafajtak.Id        
    `,(err,rows)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json(rows);
        }
    })

});

app.post('/kutyak',(req,res)=>{
    const{fajtaid,nevid,eletkor,utolsoell}=req.body;
    db.run("INSERT INTO kutya (fajtaid,nevid,eletkor,utolsoell) values(?,?,?,?)"
    ,[fajtaid,nevid,eletkor,utolsoell],(err)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json({message:"Adat beszúrva!"})
        }
    })

});

app.patch('/kutyak',(req,res)=>{
    const{Id,fajtaid,nevid,eletkor,utolsoell}=req.body;
    db.run("UPDATE kutya SET fajtaid=?,nevid=?,eletkor=?,utolsoell=? WHERE Id=?"
    ,[fajtaid,nevid,eletkor,utolsoell,Id],(err)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json({message:"Adat módosítva!"})
        }
    })

});

app.delete('/kutyak',(req,res)=>{
    const{Id}=req.body;
    db.get("PRAGMA foreign_keys = ON");
    db.run("DELETE FROM kutya WHERE Id=?"
    ,[Id],(err)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json({message:"Adat törölve!"})
        }
    })

});

