import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";

@Component({
  selector: 'app-two-dsweet-dreams',
  templateUrl: './two-dsweet-dreams.component.html',
  styleUrls: ['./two-dsweet-dreams.component.css']
})
export class TwoDsweetDreamsComponent implements OnInit {

  constructor(private content: ContentService) { }

  sweet2DContent;
  ngOnInit(){
    this.content.getData('/homePage/index/7').subscribe((data:any)=>{
      this.sweet2DContent = data;
      console.log(data);
    });
  }

}
