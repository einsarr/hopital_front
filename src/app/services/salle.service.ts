import { Injectable } from '@angular/core';
import { Salle } from '../models/Salle.Model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  baseUrl:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

      public getSalles():Observable<Array<Salle>>{
          return this.http.get<Array<Salle>>(this.baseUrl+"/salles");
      }

      public deleteSalle(salle:Salle){
        return this.http.delete<Salle>(this.baseUrl+"/salles/"+salle.id);
      }

      saveSalle(salle:Salle){
        return this.http.post<Salle>(this.baseUrl+"/salles",salle);
      }

      getSalleById(salleId: number){
        return this.http.get<Salle>(this.baseUrl+"/salles/"+salleId);
      }

      updateSalle(salle:Salle){
        return this.http.put<Salle>(this.baseUrl+"/salles/"+salle.id,salle);
      }
}
