import { Injectable } from '@angular/core';

declare var $: any;


@Injectable()
export class ProfilePageService {

  constructor() { }

  menuFunc(obj){
    $('[href="'+ obj.selection +'"]').text(function (index, text) {
      if (text == obj.defText) {
        $(this).html('<i class="fa '+ obj.symbol +'"></i>'+ obj.changeText);
      }
    });
  }

}
