console.log("Typescript");

let szam=120;
szam=256;

//Typescript-ben ez nem működik, mert az érték nem number típusú
//szam="valami";

let szam2:number;
szam2=556;
szam2=488.677;

let szoveg:string;
szoveg="bármi";

//union type

let uni:string|number;
uni=123;
uni="szöveg";

function osszead(a:number,b:number){
    return a+b;
}

console.log(osszead(23,45));

function osszead_(a:number|string,b:number){
    if(typeof a==="string")  {
        return a;
    }
    return a+b;
}

console.log(osszead_("g",24));
console.log(osszead_(23,33));

//literál típus

let l_szamok:10|20|30;
l_szamok=30;

type Szamok=10|25|36;

let tszam:Szamok;

tszam=25;

//Listák, tömbök
let szamok:Array<number>=[];

let szamok2=[2,3,45,88];

//Típus definiálása
type Vegyes=(string|number)[];

let vegyes:Vegyes=["q",123,"zz",459];

//Típus definiálása

type Szemely={
    vezeteknev:string,
    keresztnev:string,
    kor:number,
    kepek?:Array<Kep>
}

interface Kep {
    fajlnev:string,
    szelesseg:number,
    magassag:number
}

let szemely:Szemely={
    vezeteknev:"Kiss",
    keresztnev:"Ubul",
    kor:15
}


//tuple
type Dolgozo=[nev:string,eletkor:number];

let dolgozo:Dolgozo=["Kiss Ubul",34];

const[nev,eletkor]=dolgozo;

let ize:any;
