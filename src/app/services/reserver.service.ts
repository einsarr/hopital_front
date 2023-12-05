import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/Reservation.Model';
import { Observable } from 'rxjs';
import { Lit } from '../models/Lit.Model';

@Injectable({
  providedIn: 'root'
})
export class ReserverService {

  baseUrl:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

      saveReservation(reservation:Reservation){
        return this.http.post<Reservation>(this.baseUrl+"/reservations",reservation);
      }

      public getReservations():Observable<Array<Reservation>>{
        return this.http.get<Array<Reservation>>(this.baseUrl+"/reservations");
    }

    public deleteReservation(lit:Reservation){
      return this.http.delete<Reservation>(this.baseUrl+"/reservations/"+lit.id);
    }


    getReservationById(reserverId: number){
      return this.http.get<Reservation>(this.baseUrl+"/reservations/"+reserverId);
    }

    updateReservation(reserver:Reservation){
      return this.http.patch<Reservation>(this.baseUrl+"/reservations/"+reserver.id,reserver);
    }

    searchReservation(litId:Lit){
      return this.http.get<Lit>(this.baseUrl+"/litsearch/"+litId);
    }
}
