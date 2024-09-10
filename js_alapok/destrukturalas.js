
const szemelyek=["Anna","Péter","Géza","Lajos"];

const valaki={
    nev:"Laki Endre",
    magassag:188,
    suly:99
}

//A destruktúrálással a listák/objektumok adataihoz férhetünk hozzá könnyen

//Destruktúrálás objektumból

const {nev,magassag}=valaki;

console.log(nev);
console.log(magassag);

const {nev:neve,magassag:magassaga}=valaki;

console.log(neve);
console.log(magassaga);

//const [elso,masodik]=szemelyek;



const [elso,masodik,...rest]=szemelyek;

console.log(elso)
console.log(masodik)
console.log(...rest) //rest operátor