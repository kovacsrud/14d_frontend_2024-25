import { Component, Input } from '@angular/core';
import { Character } from '../../model/character';


@Component({
  selector: 'app-character',
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  @Input()
  result:Character={} as Character;

}
