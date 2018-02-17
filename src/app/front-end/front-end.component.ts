import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";

declare var $: any;
declare var introJs: any;

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.css']
})
export class FrontEndComponent implements OnInit {

  public welcomeContent;

  constructor(private content: ContentService){}

  ngOnInit(){
    this.content.getData('/welcome').subscribe((data: any) => {
      this.welcomeContent = data;
      this.welcomeModal();
    });
  }

  welcomeModal(){
    $(function () {
      $("#tutorial").iziModal({
        title: 'Notification',
        icon: 'fa fa-book',
        radius: 10,
        padding: 100,
      });

      $(".under-cons").iziModal({
        title: 'Construction',
        subtitle: 'On going...',
        transitionIn: 'bounceInDown',
        transitionOut: 'bounceOutDown',
        transitionInOverlay: 'bounceInUp',
        transitionOutOverlay: 'bounceOutUp',
        icon: 'fa fa-cogs',
        radius: 5,
        padding: 20,
        loop: true
      });
      setTimeout(function() {
        $("#welcome-modal").iziModal({
          title: 'Portfolio Page',
          subtitle: 'My portfolio <strong>WebSite</strong>',
          icon: 'fa fa-eercast',
          width: 1000,
          overlayClose: false,
          radius: 5,
          padding: 20,

          onClosed: function(){
            var lastElem;
            introJs()
              .setOption("overlayOpacity", 1)
              .setOption("exitOnOverlayClick", false)
              .setOption("exitOnEsc", false)
              .onchange(function(targetElement) {
                lastElem = targetElement;
                $(targetElement).prop('disabled', true);
                $(targetElement).prev().prop('disabled', false);

                $(document).on('click', '.introjs-skipbutton', function () {
                  $(targetElement).prop('disabled', false);
                });
              }).oncomplete(function() {
              $(lastElem).prop('disabled', false);
              $("#tutorial").iziModal('open');
            }).start();
          }
        });

        $("#welcome-modal").iziModal('open');
      }, 1000);
    });
  }
}
