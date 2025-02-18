import { Component, OnInit } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-randusers',
  imports: [NgFor,NgIf,SelectComponent],
  templateUrl: './randusers.component.html',
  styleUrl: './randusers.component.css'
})
export class RandusersComponent implements OnInit {

  //Akkor fut le, amikor a komponens létrejön
   ngOnInit():void{
     this.fetchData();
   }

  userList:any=[];
  isLoading=false;
  userNumber="5";

  fetchData(){
    this.isLoading=true;
    fetch(`https://randomuser.me/api/?results=${this.userNumber}`)
    .then(res=>res.json())
    .then(adat=>this.userList=adat.results)
    .catch((err)=>alert(err))
    .finally(()=>this.isLoading=false);
  }

  getUserNumber(e:string){
    this.userNumber=e;
    this.fetchData();
  }

}
