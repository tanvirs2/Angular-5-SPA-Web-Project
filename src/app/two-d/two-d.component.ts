import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";

@Component({
  selector: 'app-two-d',
  templateUrl: './two-d.component.html',
  styleUrls: ['./two-d.component.css']
})
export class TwoDComponent implements OnInit {

  constructor(private content: ContentService) { }

  twoDContent;
  ngOnInit(){
    this.content.getData('/homePage/index/6').subscribe((data:any)=>{
      this.twoDContent = data;
      console.log(data);
    });
  }

}
