import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";
import {fade} from "../animation";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  animations: [
    fade
  ]
})
export class VideoComponent implements OnInit {

  vdoThumbHead = 'Video Making';
  vdoThumbBody = 'Project screenshots from video';

  constructor(private content: ContentService) { }

  videoContent;
  ngOnInit(){
    this.content.getData('/homePage/index/9').subscribe((data:any)=>{
      this.videoContent = data;
    });
  }

}
