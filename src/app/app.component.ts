import { Component, OnInit } from '@angular/core';
import {ContentService} from "./content.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  welcomeContent;

  constructor(private content: ContentService){}

  ngOnInit(){
    this.welcomeContent = this.content.welcomeContent;
  }
}
