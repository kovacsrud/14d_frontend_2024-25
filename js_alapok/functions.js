//Függvények a Javascriptben

function osszead(a,b,c){
    return a+b+c;
}

console.log(osszead(10,20,30));

function osszead2(a,b=10,c=20){
    return a+b+c;
}

console.log(osszead2(10));
console.log(osszead2(10,32));
console.log(osszead2(11,22,44));

//Arrow function

const szum=(a,b,c)=>a+b+c;

console.log(szum(1,2,3));

//Tetszőleges számú paraméter??

function sum(){
    let osszeg=0;
    for(let i=0;i<arguments.length;i++){
        osszeg+=arguments[i];
    }
    return osszeg;
}

console.log(sum(3,6,9));
console.log(sum(4,6,9,11,19,33));
console.log(sum(4,6,9,11,19,33,266,78,115));
