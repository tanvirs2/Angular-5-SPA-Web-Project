import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) {}

  //server = 'http://localhost/myWebLaravel/public/api';
  server = 'http://tanvirpro.com/all_project/api/public/api';

  getData(section){
    return this.http.get(this.server+section);
  }

}
