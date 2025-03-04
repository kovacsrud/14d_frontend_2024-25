import { Component } from '@angular/core';
import { WeatherComponent } from '../weather/weather.component';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-main',
  imports: [WeatherComponent,NewsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
