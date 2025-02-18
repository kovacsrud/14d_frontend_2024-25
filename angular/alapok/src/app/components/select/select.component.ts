import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Output()
  kivalasztottErtek=new EventEmitter();

  outputErtek(e:any){
    this.kivalasztottErtek.emit(e.target.value);
  }

}
