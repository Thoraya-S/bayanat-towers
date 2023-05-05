import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TowersService {
  private baseUrl = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }

  // cancelImgReferral(body: any): Observable<any> {
   // return this.http.post(AppUtils.CANCEL_IMG_REFERRAL, body)
 // }

    getAllTowersData():Observable<any>{
      return this.http.get(this.baseUrl+'allTowers');
    }
}
