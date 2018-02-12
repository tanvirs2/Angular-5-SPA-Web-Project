import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";

@Component({
  selector: 'app-rmgerp',
  templateUrl: './rmgerp.component.html',
  styleUrls: ['./rmgerp.component.css']
})
export class RmgerpComponent implements OnInit {

  constructor(private content: ContentService) { }

  rmgContent;
  ngOnInit(){
    this.content.getData('/homePage/index/2').subscribe((data:any)=>{
      this.rmgContent = data;
      console.log(data);
    });
  }

}
