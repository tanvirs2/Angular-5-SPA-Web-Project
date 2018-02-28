import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";
import {fade} from "../animation";

@Component({
  selector: 'app-two-dsweet-dreams',
  templateUrl: './two-dsweet-dreams.component.html',
  styleUrls: ['./two-dsweet-dreams.component.css'],
  animations: [
    fade
  ]
})
export class TwoDsweetDreamsComponent implements OnInit {

  twoDImgHead = 'Raw JavaScript | JS';
  twoDImgBody = 'Making this interactive graphics with use of JS technically. Graphics programming on the WEB';

  constructor(private content: ContentService) { }

  sweet2DContent;
  ngOnInit(){
    this.content.getData('/homePage/index/7').subscribe((data:any)=>{
      this.sweet2DContent = data;
    });
  }

}
