import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }


  bookAppointment(userData) {
    return this.http.post(environment.base_api_uri+ 'bookAppointment', userData);
  }


}
