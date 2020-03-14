import { Injectable } from '@angular/core';
import { Shoplist } from './shoplist';
import { Observable } from 'rxjs';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private localUrl :string;


  getShoppinglist(): Observable<HttpResponse<Shoplist[]>> {
    return this.https.get<Shoplist[]>(
      this.localUrl, { observe: 'response' });
  }
  
  // getShoppinglist() {
  //  return this.https.get(this.localUrl);
  // }
  constructor( private https:HttpClient) {
    this.localUrl ='https://api.myjson.com/bins/qzuzi';

   
   }
  
}

