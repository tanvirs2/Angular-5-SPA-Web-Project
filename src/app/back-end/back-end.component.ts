import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";

@Component({
  selector: 'app-back-end',
  templateUrl: './back-end.component.html',
  styleUrls: ['./back-end.component.css']
})
export class BackEndComponent implements OnInit {

  constructor(private content: ContentService) { }

  homeContent;
  ngOnInit(){
    this.content.getData('/homePage/index/1').subscribe((data:any)=>{
      this.homeContent = data;
      console.log(data);
    });
  }

}
