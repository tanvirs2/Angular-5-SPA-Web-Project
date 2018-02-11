import { Component, OnInit } from '@angular/core';
import {ContentService} from "./service/content.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public edited = false;
  saveTodos(): void {
    //show box msg
    this.edited = true;
    //wait 3 Seconds and hide
    setTimeout(function() {
      this.edited = false;
      console.log(this.edited);
    }.bind(this), 2000);
  }

  public welcomeContent;

  constructor(private content: ContentService){}

  ngOnInit(){
    this.content.getData('/welcome').subscribe((data: any) => {
      this.welcomeContent = data.welcomeMsg;
    });

    this.saveTodos();
  }
}
