import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public edited = 0;
  saveTodos(): void {
    //show box msg
    this.edited = 0;
    //wait 3 Seconds and hide
    setTimeout(function() {
      this.edited = 1;
      console.log(this.edited);
    }.bind(this), 3000);
  }

  constructor(private route: Router) {
    //console.log(this.route.isActive('test', true));
  }

  ngOnInit() {
    //this.saveTodos();
  }
}
