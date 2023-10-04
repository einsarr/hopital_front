import { Injectable } from '@angular/core';
import { Typelit } from '../models/Typelit.Model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypelitService {
  baseUrl:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

      public getTypelits():Observable<Array<Typelit>>{
          return this.http.get<Array<Typelit>>(this.baseUrl+"/typelits");
      }

      public deleteTypelit(typelit:Typelit){
        return this.http.delete<Typelit>(this.baseUrl+"/typelits/"+typelit.id);
      }

      saveTypelit(typelit:Typelit){
        return this.http.post<Typelit>(this.baseUrl+"/typelits",typelit);
      }

      getTypelitById(typelitId: number){
        return this.http.get<Typelit>(this.baseUrl+"/typelits/"+typelitId);
      }

      updateTypelit(typelit:Typelit){
        return this.http.put<Typelit>(this.baseUrl+"/typelits/"+typelit.id,typelit);
      }
      
}
