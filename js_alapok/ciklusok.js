//Ciklusok

let nevek=["Elek","Ubul","Zénó","Ella","Anita"];

let nevsorAlcim=document.createElement('h2');
nevsorAlcim.textContent="Névsor";

root.appendChild(nevsorAlcim);

let nevLista=document.createElement('ul');

for(let i=0;i<nevek.length;i++){
    let nevElem=document.createElement('li');
    nevElem.textContent=nevek[i];
    nevLista.appendChild(nevElem);
}


let start=0;
while(start<nevek.length){
    let nevElem=document.createElement('li');
    nevElem.textContent=nevek[start];
    nevLista.appendChild(nevElem);
    start++;

}

//Nem kell végérték, addig megy, amíg a nevek lista végére nem ér.
for (const i in nevek) {
    let nevElem=document.createElement('li');
    nevElem.textContent=nevek[i];
    nevLista.appendChild(nevElem);    
}

for (const i of nevek) {
    let nevElem=document.createElement('li');
    nevElem.textContent=i;
    nevLista.appendChild(nevElem);    
}

start=0;
do {
    
    let nevElem=document.createElement('li');
    nevElem.textContent=nevek[start];
    nevLista.appendChild(nevElem);
    start++;
            
} while (start<nevek.length);

root.appendChild(nevLista);