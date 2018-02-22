import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class ContentService {

  //server = 'http://localhost/myWebLaravel/public/api';
  server = 'http://tanvirpro.com/all_project/api/public/api';

  constructor(public http: HttpClient) {}

  getData(section){
    return this.http.get(this.server+section);
  }
  postData(section, formData){
    return this.http.post(this.server+section, formData);
  }
}
