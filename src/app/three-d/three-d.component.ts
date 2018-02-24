import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";

@Component({
  selector: 'app-three-d',
  templateUrl: './three-d.component.html',
  styleUrls: ['./three-d.component.css']
})
export class ThreeDComponent implements OnInit {

  pageOf3DHead = 'WebGL | 3D API';
  pageOf3DBody =
    'WebGL (Web Graphics Library) is a JavaScript API for rendering ' +
    'interactive 2D and 3D graphics within any compatible web browser ' +
    'without the use of plug-ins.';

  constructor(private content: ContentService) { }

  threeContent;
  ngOnInit(){
    this.content.getData('/homePage/index/3').subscribe((data:any)=>{
      this.threeContent = data;
    });
  }

}
