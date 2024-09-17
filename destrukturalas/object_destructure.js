console.log("Destruktúrálás");

let szemely={
    "vezeteknev":"Szamosi",
    "keresztnev":"Béla",
    "szuletesihely":"Orosháza"
}

//Egyszerű destruktúrálás
const {vezeteknev,keresztnev}=szemely;

console.log(vezeteknev,keresztnev);

const {vezeteknev:vnev,keresztnev:knev}=szemely;

console.log(vnev,knev);


szemely={...szemely,szulido:"2001.01.01"};

console.log(szemely);

//Az objektum valamelyik adatának módosítása

szemely={...szemely,["szuletesihely"]:"Gyula"}

console.log(szemely);

let foglalkozas={
    "munkaltato":"Csőd Kft",
    "beosztas":"kazánfűtő",
    "munkarend":{
        "nappal":"1",
        "éjszaka":"2"
    }
}

szemely={...szemely,foglalkozas};

console.log(szemely);

//Listák destruktúrálása

let szamok=[24,35,113,13,31,788];

let egy=szamok[0];
let ketto=szamok[1];

//const [elso,masodik,harmadik]=szamok;


//Rest operátor használata
const [elso,masodik,...rest]=szamok;

console.log(elso,masodik);

console.log(...rest);

szamok=[...szamok,511,698];

console.log(szamok);