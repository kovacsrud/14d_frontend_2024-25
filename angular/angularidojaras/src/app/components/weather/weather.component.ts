import { Component, OnInit } from '@angular/core';
import {fetchWeatherApi} from 'openmeteo';
import { NgIf} from '@angular/common';
import { Weather } from '../../types/AppTypes';


@Component({
  selector: 'app-weather',
  imports: [NgIf],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {


  ngOnInit(): void {
    this.getWeather();
  }

  //46.68222786350228, 21.10847620136351
  params={
    "latitude":0,
    "longitude":0,
    "hourly":"temperature_2m"
  }

  ipurl="http://ip-api.com/json/";
  url=``;

  //https://api.open-meteo.com/v1/forecast?latitude=47.4979&longitude=19.0402&hourly=temperature_2m,relative_humidity_2m,windspeed_10m,precipitation
  response:any;
  idojaras:Weather|null=null;

  async getWeather(){

    
    let ipkeres=await fetch(this.ipurl);
    let ipvalasz=await ipkeres.json();

    this.params.latitude=ipvalasz.lat;
    this.params.longitude=ipvalasz.lon;

    this.url=`https://api.open-meteo.com/v1/forecast?latitude=${this.params.latitude}&longitude=${this.params.longitude}&current_weather=true`;

    
    this.response=await fetch(this.url);          
    this.idojaras=await this.response.json();        

    console.log(this.params);

  }

  

  
  
}
