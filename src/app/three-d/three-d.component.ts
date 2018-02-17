import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";

@Component({
  selector: 'app-three-d',
  templateUrl: './three-d.component.html',
  styleUrls: ['./three-d.component.css']
})
export class ThreeDComponent implements OnInit {

  constructor(private content: ContentService) { }

  threeContent;
  ngOnInit(){
    this.content.getData('/homePage/index/3').subscribe((data:any)=>{
      this.threeContent = data;
    });
  }

}
