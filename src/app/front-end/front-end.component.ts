import { Component, OnInit } from '@angular/core';
import {ContentService} from "../service/content.service";
import {fade} from "../animation";

declare var $: any;
declare var introJs: any;

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.css'],
  animations: [
    fade
  ]
})
export class FrontEndComponent implements OnInit {

  public welcomeContent;

  constructor(private content: ContentService){}

  ngOnInit(){
    this.content.getData('/welcome').subscribe((data: any) => {
      this.welcomeContent = data;
      let welMsgInterval = setInterval( () => {
        this.welcomeMsg();
        if ($("#wel-msg").text().trim().length > 10) {
          clearInterval(welMsgInterval);
        }
      }, 1);

    });
  }

  welcomeMsg(){
    $(function () {
      $("#tutorial").iziModal({
        title: 'Instruction',
        icon: 'fa fa-book',
        radius: 5,
        padding: 10,
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

      $("#welcome-modal").iziModal({
        title: 'Portfolio Page',
        subtitle: 'My portfolio <strong>WebSite</strong>',
        icon: 'fa fa-eercast',
        width: 1000,
        overlayClose: false,
        radius: 5,
        padding: 20,
        transitionIn:	'bounceInUp',
        transitionInOverlay: 'bounceInUp',
        onOpening: function(){
          $("html, body").animate({ scrollTop: (50/100)*$(document).height() }, 1500);
        },
        onClosing: function () {
          $("html, body").animate({ scrollTop: 0 }, "slow");
        },
        onClosed: function(){ //iziModal on closed
          if ($('body').find('[data-intro]').length > 0) {
            $("body").css("overflow", "hidden");
          }
          var lastElem;
          introJs()           //intro JS start
            //.setOption("overlayOpacity", 0.6)
            .setOption("exitOnOverlayClick", false)
            .setOption("exitOnEsc", false)
            .onchange(function(targetElement) {
              lastElem = targetElement;
              $(targetElement).find('button').prop('disabled', true);
              //$(targetElement).prop('disabled', true);
              $(targetElement).prev().prop('disabled', false);

              $(document).on('click', '.introjs-skipbutton', function () {
                $(targetElement).find('button').prop('disabled', false);
                $(targetElement).prop('disabled', false);
                $("body").css("overflow", "auto");
              });
            }).oncomplete(function() {
            $(lastElem).prop('disabled', false);
            $("body").css("overflow", "auto");
            $("#tutorial").iziModal('open');
          }).start(); //intro JS complete
        }
      });

    });
  }
}
