import { Component, OnInit } from '@angular/core';
import { NgIf,NgFor } from '@angular/common';
import { News } from '../../types/AppTypes';


@Component({
  selector: 'app-news',
  imports: [NgIf,NgFor],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {

  ngOnInit(): void {
    this.getNews();
    //console.log(this.newsData);
  }

  isLoading=false;
  newsData:News[]=[];
  url="https://content.guardianapis.com/search?page=2&q=hungary&api-key=test";

  getNews(){
    this.isLoading=true;
    fetch(this.url)
    .then(res=>res.json())
    .then(news=>{this.newsData=news.response.results})
    .catch(err=>alert(err))
    .finally(()=>this.isLoading=false);

  }

}
