import { Component, OnInit, WritableSignal } from '@angular/core';
import {FormControl,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { NgFor,NgIf } from '@angular/common';
import {Router} from '@angular/router';
import { TokenService } from '../../services/tokenservice';

@Component({
  standalone:true,
  selector: 'app-register',
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
  
})
export class RegisterComponent implements OnInit {

  token:string="";
  constructor(private router:Router,private tokenservice:TokenService){
  
    

  }

  

  ngOnInit(): void {
    this.tokenservice.data.subscribe(value=>{
      this.token=value;
      console.log(this.token);
    });
  }

  submit(e:any){
    e.preventDefault();
    fetch("https://localhost:8000/api/user/regisztracio",{
      method:'POST',
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(this.registerForm.value)

    })
    .then(res=>res.json())
    .then(valasz=>{
      if(!valasz.message){
        sessionStorage.setItem('usertoken',valasz);
        this.tokenservice.updateToken(valasz);
        
        alert(valasz);
        this.router.navigate(['/']);
      } else {
        alert(valasz.message);
      }
    })
    .catch(err=>alert("Fetch hiba:"+err));
  }

  getError(path:string,errorName:string){
    const formControl=this.registerForm.get(path) as FormControl;
    if(formControl.untouched && formControl.pristine){
      return;
    }
    return formControl.errors?.[errorName];

  }

  registerForm=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    age:new FormControl('',[Validators.required,Validators.min(10),Validators.max(99)]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    passwordagain:new FormControl('',[Validators.required,Validators.minLength(8)]),


  });

}
