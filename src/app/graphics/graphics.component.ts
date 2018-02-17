import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  constructor(private content: ContentService) { }

  graphicsContent;
  ngOnInit(){
    this.content.getData('/homePage/index/10').subscribe((data:any)=>{
      this.graphicsContent = data;
    });
  }

}
