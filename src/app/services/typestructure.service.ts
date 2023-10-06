import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Typestructure } from '../models/Typestructure.Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypestructureService {

  baseUrl:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

      public getTypestructures():Observable<Array<Typestructure>>{
          return this.http.get<Array<Typestructure>>(this.baseUrl+"/typestructures");
      }

      public deleteTypestructure(typestructure:Typestructure){
        return this.http.delete<Typestructure>(this.baseUrl+"/typestructures/"+typestructure.id);
      }

      saveTypestructure(typestructure:Typestructure){
        return this.http.post<Typestructure>(this.baseUrl+"/typestructures",typestructure);
      }

      getTypestructureById(typestructureId: number){
        return this.http.get<Typestructure>(this.baseUrl+"/typestructures/"+typestructureId);
      }

      updateTypestructure(typestructure:Typestructure){
        return this.http.put<Typestructure>(this.baseUrl+"/typestructures/"+typestructure.id,typestructure);
      }
}
