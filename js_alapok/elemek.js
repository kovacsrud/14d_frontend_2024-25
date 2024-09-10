//Meg kell határozni, hogy melyik elemhez akarunk kapcsolni elemeket.
let root=document.getElementById('root');

let cimsor2=document.createElement('h2');
cimsor2.textContent="Elemek létrehozása";

root.appendChild(cimsor2);

let lista=document.createElement('ul');

let listaElem1=document.createElement('li');
listaElem1.textContent="Egy";
lista.appendChild(listaElem1);

let listaElem2=document.createElement('li');
listaElem2.textContent="Kettő";
lista.appendChild(listaElem2);

let listaElem3=document.createElement('li');
listaElem3.textContent="Három";
lista.appendChild(listaElem3);

root.appendChild(lista);

