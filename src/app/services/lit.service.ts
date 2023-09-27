import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LitService {

  baseUrl:string = "http://localhost:8565";

  constructor(private http:HttpClient) { }

      public getEnseignants():Observable<Array<Enseignant>>{
          return this.http.get<Array<Enseignant>>(this.baseUrl+"/enseignants");
      }

      public deleteEnseignant(enseignant:Enseignant){
        return this.http.delete<Enseignant>(this.baseUrl+"/enseignant/"+enseignant.enseignantId);
      }

      saveEnseignant(enseignant:Enseignant){
        return this.http.post<Enseignant>(this.baseUrl+"/enseignant",enseignant);
      }

      getEnseignantById(enseignantId: number){
        return this.http.get<Enseignant>(this.baseUrl+"/enseignant/"+enseignantId);
      }

      updateEnseignant(enseignant:Enseignant){
        return this.http.put<Enseignant>(this.baseUrl+"/enseignant/"+enseignant.enseignantId,enseignant);
      }

      public getSpecialites():Observable<Array<Specialite>>{
        return this.http.get<Array<Specialite>>(this.baseUrl+"/specialites");
      }
}
