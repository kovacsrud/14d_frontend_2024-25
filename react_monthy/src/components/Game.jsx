import { useState,useEffect,useRef } from "react";
import GameImage from "./GameImage";

function Game() {

    function randNum(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    const autoPoz=useRef(randNum(0,2));
    const ajtok=useRef([1,1,1]); 
    const ajtokMogott=useRef([2,2,2]);
    const [doors,setDoors]=useState(ajtok.current);
    const elsoNyitas=useRef(false);
    const utolsoNyitas=useRef(false);
    const gameStatus=useRef("");
    const elsoValasztottAjto=useRef(0);
    const utolsoValasztottAjto=useRef(0);
    const cserevelNyertes=useRef(0);
    const csereNelkulNyertes=useRef(0);
    const cserevelVesztes=useRef(0);
    const csereNelkulVesztes=useRef(0);


    ajtokMogott.current[autoPoz.current]=3;


    const changeDoor=(doorIndex,doorValue)=>{
        setDoors(prevDoors=>{
            const updatedDoors=[...prevDoors];
            updatedDoors[doorIndex]=doorValue;
            return updatedDoors;
        })
    }

    const gameInit=()=>{
        elsoNyitas.current=false;
        utolsoNyitas.current=false;
        gameStatus.current="";

        ajtok.current=[1,1,1];
        ajtokMogott.current=[2,2,2];
        setDoors(ajtok.current);
        autoPoz.current=randNum(0,2);
        ajtokMogott.current[autoPoz.current]=3;

        document.getElementById('0').removeAttribute('disabled');
        document.getElementById('1').removeAttribute('disabled');
        document.getElementById('2').removeAttribute('disabled');

    }

    const buttonSelect=(e)=>{
        const valasztottAjto=e.target.value;

        if(!utolsoNyitas.current && elsoNyitas.current){
            utolsoNyitas.current=true;
            utolsoValasztottAjto.current=valasztottAjto;
            if(valasztottAjto==autoPoz.current){
                gameStatus.current="Nyertél!";
                if(elsoValasztottAjto.current==utolsoValasztottAjto.current){
                    csereNelkulNyertes.current++;
                } else {
                    cserevelNyertes.current++;
                }
            } else {
                gameStatus.current="Vesztettél!";
                if(elsoValasztottAjto.current==utolsoValasztottAjto.current){
                    csereNelkulVesztes.current++;
                } else {
                    cserevelVesztes.current++;
                }
            }
            console.log(ajtokMogott.current);
            ajtok.current=ajtokMogott.current;
            setDoors(ajtok.current);
        }

        if(!elsoNyitas.current){
            elsoNyitas.current=true;
            //Meg kell mutatnunk egy ajtót, ami mögött kecske van

            //A kecskéket tartalmazó elemek indexeinek kigyűjtése
            const kecskek=ajtokMogott.current.map((ajto,i)=>(ajto!==3 ? i : -1)).filter(x=>x!==-1);
            let kecskeAjto=kecskek[randNum(0,kecskek.length)];
            elsoValasztottAjto.current=valasztottAjto;
            


            while(kecskeAjto==valasztottAjto || kecskeAjto===undefined) {
                kecskeAjto=kecskek[randNum(0,kecskek.length)];
            }

            document.getElementById(kecskeAjto).setAttribute('disabled',"");

            //ajtok.current[kecskeAjto]=2;
            //console.log(ajtok.current);
            //setDoors(ajtok.current);
            changeDoor(kecskeAjto,2);

        }

       

    }

    useEffect(()=>{
       // gameInit();
    },[])


  return (
    <div>
        <div className="grid grid-cols-3 justify-items-center bg-gradient-to-bl from-teal-400 to-blue-500">
            {
                doors.map((door,i)=>(<GameImage key={i} selected={door}/>))
            }
            <button id="0" onClick={buttonSelect} className="btn btn-outline" value="0">1</button>
            <button id="1" onClick={buttonSelect} className="btn btn-outline" value="1">2</button>
            <button id="2" onClick={buttonSelect} className="btn btn-outline" value="2">3</button>
        </div>
        
        <div className="grid grid-cols-1 justify-items-center m-5">
            <button onClick={gameInit} className="btn btn-outline">Új játék</button>
        </div>

        <div
    class="w-full h-full p-10 bg-gradient-to-bl from-teal-400 to-blue-500 flex flex-col justify-center items-center text-white">
    <h1 class="text-5xl m-5"><b>{gameStatus.current}</b> </h1>
    <p>Játék statisztika</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 lg:mt-20">

        <div class="bg-transparent border text-center">
            <p class="text-5xl px-10 py-5">{cserevelNyertes.current}</p>
            <hr/>
            <p class="px-10 py-5">Cserével nyert</p>
        </div>

        <div class="bg-transparent border text-center">
            <p class="text-5xl px-10 py-5">{csereNelkulNyertes.current}</p>
            <hr/>
            <p class="px-10 py-5">Csere nélkül nyert</p>
        </div>

        <div class="bg-transparent border text-center">
            <p class="text-5xl px-10 py-5">{cserevelVesztes.current}</p>
            <hr/>
            <p class="px-10 py-5">Cserével veszített</p>
        </div>
        <div class="bg-transparent border text-center">
            <p class="text-5xl px-10 py-5">{csereNelkulVesztes.current }</p>
            <hr/>
            <p class="px-10 py-5">Csere nélkül veszített</p>
        </div>
    </div>
    
</div>    

    </div>
  )
}

export default Game