//Objektumok a Javascriptben

let szemely={
    vezeteknev:"Kereki",
    keresztnev:"Endre",
    szulev:1968,
    kor() {
        return new Date().getFullYear()-this.szulev;
    }
}

console.log(szemely);
console.log(szemely.vezeteknev+" "+szemely.keresztnev);
console.log(szemely.kor());

class Szemely {
    constructor(vezeteknev,keresztnev,szuletesiev){
        this.vezeteknev=vezeteknev,
        this.keresztnev=keresztnev,
        this.szuletesiev=szuletesiev
    }
    kor(){
        return new Date().getFullYear()-this.szuletesiev
    }
}

let zoltan=new Szemely("Novák","Zoltán",2001);

console.log(zoltan.keresztnev);
console.log(zoltan.kor());

//Objektum létrehozása másképp

const termek=new Object();

termek.Id=1;
termek.nev="lámpa";
termek.ar=2366
termek.szin="kék";

console.log(termek);

const dolgozo={
    vezeteknev:"Váradi",
    keresztnev:"Miklós",
    szuletesiev:1999,
    lakhely:{
        helyseg:"Gyula",
        utca:"Petőfi",
        hazszam:33
    },
    munkahely:{
        cegnev:"Gázkazán elrontó Kft",
        beosztas:"portás"
    },
    vegzettsegek:["lakatos","kazánkovács","portás"]

};

console.log(dolgozo.lakhely);
console.log(dolgozo.lakhely.utca);
console.log(dolgozo.vegzettsegek);

