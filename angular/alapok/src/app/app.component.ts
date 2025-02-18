import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ListaComponent } from './components/lista/lista.component';
import { SelectComponent } from './components/select/select.component';
import { RandusersComponent } from './components/randusers/randusers.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,ListaComponent,SelectComponent,RandusersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Angular alapok';
  alcim="App komponens";
  eletkor:number=45;
  valamiErtek="1";
  
  getErtek(e:string){
    this.valamiErtek=e;
  }
  

}
