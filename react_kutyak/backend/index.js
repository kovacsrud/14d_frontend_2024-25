const express=require('express');
const app=express();
const sqlite3=require('sqlite3');
const db=new sqlite3.Database('./kutyak_good_unique.db');
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
    console.log(req.body);
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
    const{id,nev,eredetinev}=req.body;
    console.log(req.body);
    db.run("UPDATE kutyafajtak SET nev=?,eredetinev=? WHERE id=?"
    ,[nev,eredetinev,id]
    ,(err)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json({message:"Adat módosítva!"})
        }
    });
});

app.delete('/kutyafajtak',(req,res)=>{
   const{id}=req.body;
   db.run("DELETE FROM kutyafajtak WHERE id=?"
   ,[id]
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

