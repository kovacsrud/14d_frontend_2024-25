import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/tokenservice';

@Component({
  standalone:true,
  selector: 'app-loggedin',
  imports: [],
  templateUrl: './loggedin.component.html',
  styleUrl: './loggedin.component.css'
})
export class LoggedinComponent implements OnInit {

  logtoken:string="Logt";
  constructor(private tokenservice:TokenService){

    
    

  }
  ngOnInit(): void {
    this.tokenservice.data.subscribe(value=>this.logtoken=value);
  }

}
