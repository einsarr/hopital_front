import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profil } from '../models/Profil.Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  baseUrl:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

      public getProfils():Observable<Array<Profil>>{
          return this.http.get<Array<Profil>>(this.baseUrl+"/profils");
      }

      public deleteProfil(profil:Profil){
        return this.http.delete<Profil>(this.baseUrl+"/profils/"+profil.id);
      }

      saveProfil(profil:Profil){
        return this.http.post<Profil>(this.baseUrl+"/profils",profil);
      }

      getProfilById(profilId: number){
        return this.http.get<Profil>(this.baseUrl+"/profils/"+profilId);
      }

      updateProfil(profil:Profil){
        return this.http.put<Profil>(this.baseUrl+"/profils/"+profil.id,profil);
      }
}
