import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lit } from '../models/Lit.Model';

@Injectable({
  providedIn: 'root'
})
export class LitService {

  baseUrl:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

      public getLits():Observable<Array<Lit>>{
          return this.http.get<Array<Lit>>(this.baseUrl+"/lits");
      }

      public deleteLit(lit:Lit){
        return this.http.delete<Lit>(this.baseUrl+"/lits/"+lit.id);
      }

      saveLit(lit:Lit){
        return this.http.post<Lit>(this.baseUrl+"/lits",lit);
      }

      getLitById(litId: number){
        return this.http.get<Lit>(this.baseUrl+"/lits/"+litId);
      }

      updateLit(lit:Lit){
        return this.http.put<Lit>(this.baseUrl+"/lits/"+lit.id,lit);
      }
}
