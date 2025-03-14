import sqlite3 from 'sqlite3';

const kutyadb=new sqlite3.Database('./kutyak_good_unique.db',(err)=>{
    if(err){
        console.error('Hiba:',err.message);
    } else {
        console.log('Kutyák adatbázis megnyitva');
    }
});

const autodb=new sqlite3.Database('./Car_Database.db',(err)=>{
    if(err){
        console.error('Hiba:',err.message);
    } else {
        console.log('Autók adatbázis megnyitva.')
    }
});

export function getAllKutya(){
    return new Promise((resolve,reject)=>{
        kutyadb.all('select * from kutya',(err,rows)=>{
            if(err) reject(err);
            else resolve(rows);
        })
    })
}

export function getAllCustomers(){
    return new Promise((resolve,reject)=>{
        autodb.all('select * from Customers',(err,rows)=>{
            if(err) reject(err);
            else resolve(rows);
        })
    })
}
