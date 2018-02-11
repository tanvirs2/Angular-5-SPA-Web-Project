import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ContentService {

  /*Modal Content*/
  public welcomeContent;
  /*End Modal Content*/

  constructor(private http: HttpClient) {}

  server = 'http://localhost/myWebLaravel/public/api';

  getData(section){
    return this.http.get(this.server+section);
  }


  /*Profile Page*/
  public aboutMe = 'A great experienced and creative web developer with three years’ experience in a variety of exciting' +
    ' projects. A level head and rational approach to problem solving combined with a passion for innovative and fresh ' +
    'ideas has led to a portfolio of impressive website and web application solutions. Technically competent and ' +
    'industry aware means that each project is undertaken with the most up-to-date and relevant programming foundations ' +
    'available.';

  public whats_i_do = 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. ' +
    'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Maecenas et ' +
    'lorem molestie, maximus justo dignissim, cursus nisl. Nullam at ante quis ex pharetra pulvinar quis ' +
    'id dolor. Integer lorem odio, euismod ut sem sit amet, imperdiet condimentum diam.'

  public talkWithMe = 'Vestibulum ac iaculis erat, in semper dolor. Maecenas et lorem molestie, ' +
    'maximus justo dignissim, cursus nisl. Nullam at ante quis ex pharetra pulvinar quis id dolor. ' +
    'Integer lorem odio, euismod ut sem sit amet, imperdiet condimentum diam.';
  /*End Profile Page*/

  /*RMG-ERP Page*/



  /*End RMG-ERP Page*/

  /* Page*/



  /*End  Page*/

  /* Page*/



  /*End  Page*/

  /* Page*/



  /*End  Page*/

  /* Page*/



  /*End  Page*/

  /* Page*/



  /*End  Page*/

  /* Page*/



  /*End  Page*/

  /* Page*/



  /*End  Page*/

  /* Page*/



  /*End  Page*/

  /* Page*/



  /*End  Page*/

  /* Page*/



  /*End  Page*/

  /* Page*/



  /*End  Page*/

  /* Page*/



  /*End  Page*/
}
