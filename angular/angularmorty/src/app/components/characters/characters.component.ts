import { Component, OnInit } from '@angular/core';
import { NgIf,NgFor } from '@angular/common';
import { CharacterComponent } from '../character/character.component';
import { Info } from '../../model/info';
import { Character } from '../../model/character';


@Component({
  selector: 'app-characters',
  imports: [NgIf,NgFor,CharacterComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {


  ngOnInit(): void {
    this.getCharacters();
  }

  

  //1.Inicializáljuk az objektumot
  // info:Info={
  //   count:0,
  //   pages:1,
  //   prev:"",
  //   next:""
  // };

  //2. A típusban opcionálissá tesszük a propertyket
  //info:Info={};

  //3. "as" használata, ha biztosak vagyunk abban, hogy mindig minden property kap értéket
  info:Info={} as Info;


  results:Character[]=[];

  page=1;
  isLoading=false;

  getCharacters(){
    this.isLoading=true;
    fetch(`https://rickandmortyapi.com/api/character?page=${this.page}`)
    .then(res=>res.json())
    .then(adat=>{
      this.info=adat.info;
      this.results=adat.results;
    })
    .catch(err=>alert(err))
    .finally(()=>this.isLoading=false);

  }

  tovabb(){
    if(this.page<this.info.pages){
      this.page+=1;
      this.getCharacters();
    }

  }

  vissza(){
    if(this.page>1){
      this.page-=1;
      this.getCharacters();
    }

  }

}
