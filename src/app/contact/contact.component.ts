import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";
import {NgForm} from "@angular/forms";

declare var $: any;

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

  sendBtn(){
    $("#captcha-modal").iziModal({
      title: "Captcha",
      subtitle: 'Please complete the task..',
      icon: 'fa fa-bolt',
      width: 300,
      headerColor: '#af5d62'
    });
    $('#captcha-modal').iziModal('open');

    $('#captcha-modal button').click( () => {
      var captcha = $('#captcha-modal input').val().trim();
      if (parseInt(captcha) == 10) {
        $('#captcha-modal').iziModal('close');
        $('#visitor-msg-submit').click();
      }
      captcha = 0;
      $('#captcha-modal input').val('').focus();
    });
  }

  onSubmit(fm: NgForm){
    this.contentService.postData('/welcome', fm.value)
      .subscribe(res => {
        $("#success-alert").iziModal({
          title: "Successful",
          subtitle: 'Successfully send your message..',
          icon: 'fa fa-paper-plane-o',
          headerColor: '#00af66',
          width: 600,
          timeout: 5000,
          timeoutProgressbar: true,
          transitionIn: 'fadeInDown',
          transitionOut: 'fadeOutDown',
          pauseOnHover: true
        });
        $('#success-alert').iziModal('open');
      });
  }

}
