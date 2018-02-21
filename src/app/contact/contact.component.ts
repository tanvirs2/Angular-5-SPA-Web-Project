import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  homeContent;
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getData('/homePage/index/1')
      .subscribe((data:any)=>{
        this.homeContent = data;
      });
  }

  onSubmit(fm: NgForm){
    this.contentService.postData('/welcome', fm.value)
      .subscribe(res => {
        console.log(res);
      });
  }

}
