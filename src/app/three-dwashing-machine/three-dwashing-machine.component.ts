import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";

@Component({
  selector: 'app-three-dwashing-machine',
  templateUrl: './three-dwashing-machine.component.html',
  styleUrls: ['./three-dwashing-machine.component.css']
})
export class ThreeDwashingMachineComponent implements OnInit {

  constructor(private content: ContentService) { }

  washingContent;
  ngOnInit(){
    this.content.getData('/homePage/index/4').subscribe((data:any)=>{
      this.washingContent = data;
      console.log(data);
    });
  }

}
