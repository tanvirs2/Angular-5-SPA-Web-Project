import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  constructor(private content: ContentService) { }

  hobbyContent;
  ngOnInit(){
    this.content.getData('/homePage/index/8').subscribe((data:any)=>{
      this.hobbyContent = data;
      console.log(data);
    });
  }

}
