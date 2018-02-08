import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProfilePageService } from "../profile-page.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private proPage: ProfilePageService) { }

  ngAfterViewInit(){
    this.proPage.menuFunc({
      selection: "#top",
      defText: 'Project View',
      symbol: "fa-globe",
      changeText: "Welcome",
    });

    this.proPage.menuFunc({
      selection: "#about",
      defText: 'About the Project',
      symbol: "fa-pencil",
      changeText: "About Me",
    });

    this.proPage.menuFunc({
      selection: "#projects",
      defText: 'Project Gallery',
      symbol: "fa-paperclip",
      changeText: "My Gallery",
    });
  }

  ngOnInit() {

  }

}
