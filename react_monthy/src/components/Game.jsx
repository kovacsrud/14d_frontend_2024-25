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
            } else {
                gameStatus.current="Vesztettél!";
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
        <div className="grid grid-cols-3 justify-items-center">
            {
                doors.map((door,i)=>(<GameImage key={i} selected={door}/>))
            }
            <button id="0" onClick={buttonSelect} className="btn btn-outline" value="0">1</button>
            <button id="1" onClick={buttonSelect} className="btn btn-outline" value="1">2</button>
            <button id="2" onClick={buttonSelect} className="btn btn-outline" value="2">3</button>
        </div>
        <p className="text-5xl text-center">{gameStatus.current}</p>
        <button onClick={gameInit} className="btn btn-outline">Új játék</button>
    </div>
  )
}

export default Game