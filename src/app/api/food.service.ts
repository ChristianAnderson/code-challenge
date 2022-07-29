import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
  constructor(private http: HttpClient) {
    console.log('food service ready');
   }
  
   getQuery ( query : string ) {
     const apiKey = `zWfc8aVOcaQWzZWRTbJ9qoNZmai6ZjEcQx3bdhAX`;
     const urlf = `https://api.nal.usda.gov/fdc/v1/${query}&pageSize=1&api_key=${apiKey}`;
    return this.http.get(urlf);
 }

 getItem(foodName: string) {
  return this.getQuery(`foods/search?query=${foodName}`)
              .pipe( map( data => data['foods']));  
 }
}
