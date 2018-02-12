import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.css']
})
export class FrontEndComponent implements OnInit {

  public welcomeContent;

  constructor(private content: ContentService){}

  ngOnInit(){
    this.content.getData('/welcome').subscribe((data: any) => {
      this.welcomeContent = data.welcomeMsg;
    });
  }
}
