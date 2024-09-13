
let keres=new XMLHttpRequest();
let valasz="";

let root=document.getElementById('root');

keres.open('GET','https://jsonplaceholder.typicode.com/posts',true);

keres.onload=function(){
    valasz=JSON.parse(this.response);

    console.log(valasz);
    valasz.forEach(elem=>{
        let cim=document.createElement('p');
        let hozzaszolas=document.createElement('p');
    
        cim.textContent=elem.title;
        hozzaszolas.textContent=elem.body;
        root.appendChild(cim);
        root.appendChild(hozzaszolas);
    
    });
    

}

//keres.send();

fetch('https://jsonplaceholder.typicode.com/postss')
.then(res=>res.json())
.then(valasz=>{
    if(Array.isArray(valasz)){
        valasz.forEach(elem=>{
            let cim=document.createElement('p');
            let hozzaszolas=document.createElement('p');
            cim.textContent=elem.title;
            hozzaszolas.textContent=elem.body;
            root.appendChild(cim);
            root.appendChild(hozzaszolas);
        });

    } else {
        let p=document.createElement('p');
        p.textContent="Adat nem található";
        root.appendChild(p);

    }
})
.catch(err=>console.log(err));


async function letoltes() {
    try {
        let keres=await fetch('https://jsonplaceholder.typicode.com/posts');
        let valasz=await keres.json();

        if(Array.isArray(valasz)){
            valasz.forEach(elem=>{
                let cim=document.createElement('p');
                let hozzaszolas=document.createElement('p');
                cim.textContent=elem.title;
                hozzaszolas.textContent=elem.body;
                root.appendChild(cim);
                root.appendChild(hozzaszolas);
            });
    
        } else {
            let p=document.createElement('p');
            p.textContent="Adat nem található";
            root.appendChild(p);
    
        }


        
    } catch (error) {
        let p=document.createElement('p');
        p.textContent=error;
        root.appendChild(p);
    }
    
}


letoltes();


