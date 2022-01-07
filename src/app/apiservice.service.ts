import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }
  //Connected Frontend and Backend

  apiUrl = 'http://localhost:5000/';

  //Get All Data
getAllData():Observable<any>
{
return this._http.get(`${this.apiUrl}`);
}


}
