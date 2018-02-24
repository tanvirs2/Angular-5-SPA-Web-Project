import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";

@Component({
  selector: 'app-three-dsolar-system',
  templateUrl: './three-dsolar-system.component.html',
  styleUrls: ['./three-dsolar-system.component.css']
})
export class ThreeDsolarSystemComponent implements OnInit {

  threeDImgHead = 'threeJS | WebGL';
  threeDImgBody = 'Build this system with WebGL graphics programming 3D-Api on the WEB';

  constructor(private content: ContentService) { }

  solarContent;
  ngOnInit(){
    this.content.getData('/homePage/index/5').subscribe((data:any)=>{
      this.solarContent = data;
    });
  }

}
