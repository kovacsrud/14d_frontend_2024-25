//Véletlenszámok JS-ben

function randNum(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}


let veletlenSzam=document.createElement('h1');
//let randNumber=Math.floor(Math.random()*(100-10))+10;
let randNumber=randNum(10,100);
veletlenSzam.textContent=randNumber;

root.appendChild(veletlenSzam);

let vnev=["Kiss","Kovács","Lengyel","Kozma"];
let knev=["Endre","Béla","Elek","Lilla","Zsófia","Edit"];

//Generáljunk a listák alapján 50 nevet, véletlenszerűen!

let veletlenNevek=document.createElement('ol');

for(let i=0;i<50;i++){
    let genNev=document.createElement('li');
    let vezNev=vnev[randNum(0,vnev.length)];
    let kerNev=knev[randNum(0,knev.length)];
    genNev.textContent=vezNev+" "+kerNev;
    veletlenNevek.appendChild(genNev);
}

root.appendChild(veletlenNevek);