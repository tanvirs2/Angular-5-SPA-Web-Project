import { Component, OnInit, Input } from '@angular/core';
import { ProfilePageService } from "../profile-page.service";

@Component({
  selector: 'test',
  template: ``
})
export class TestComponent implements OnInit {

  constructor(private proPage: ProfilePageService){}

  ngOnInit(){
    this.proPage.menuFunc({
      selection: "#top",
      defText: 'Welcome',
      symbol: "fa-globe",
      changeText: "Project View",
    });

    this.proPage.menuFunc({
      selection: "#about",
      defText: 'About Me',
      symbol: "fa-pencil",
      changeText: "About the Project",
    });

    this.proPage.menuFunc({
      selection: "#projects",
      defText: 'My Gallery',
      symbol: "fa-paperclip",
      changeText: "Project Gallery",
    });
  }

}
