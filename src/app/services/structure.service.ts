import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Structure } from '../models/Structure.Model';

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  baseUrl:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

      public getStructures():Observable<Array<Structure>>{
          return this.http.get<Array<Structure>>(this.baseUrl+"/structures");
      }

      public deleteStructure(structure:Structure){
        return this.http.delete<Structure>(this.baseUrl+"/structures/"+structure.id);
      }

      saveStructure(structure:Structure){
        return this.http.post<Structure>(this.baseUrl+"/structures",structure);
      }

      getStructureById(structureId: number){
        return this.http.get<Structure>(this.baseUrl+"/structures/"+structureId);
      }

      updateStructure(structure:Structure){
        return this.http.put<Structure>(this.baseUrl+"/structures/"+structure.id,structure);
      }
}
