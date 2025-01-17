"use strict";
console.log("Typescript");
let szam = 120;
szam = 256;
//Typescript-ben ez nem működik, mert az érték nem number típusú
//szam="valami";
let szam2;
szam2 = 556;
szam2 = 488.677;
let szoveg;
szoveg = "bármi";
//union type
let uni;
uni = 123;
uni = "szöveg";
function osszead(a, b) {
    return a + b;
}
console.log(osszead(23, 45));
function osszead_(a, b) {
    if (typeof a === "string") {
        return a;
    }
    return a + b;
}
console.log(osszead_("g", 24));
console.log(osszead_(23, 33));
//literál típus
let l_szamok;
l_szamok = 30;
let tszam;
tszam = 25;
//Listák, tömbök
let szamok = [];
let szamok2 = [2, 3, 45, 88];
let vegyes = ["q", 123, "zz", 459];
let szemely = {
    vezeteknev: "Kiss",
    keresztnev: "Ubul",
    kor: 15
};
let dolgozo = ["Kiss Ubul", 34];
const [nev, eletkor] = dolgozo;
let ize;
