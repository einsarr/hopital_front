import { Injectable } from '@angular/core';
import { Service } from '../models/Service.Model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

      public getServices():Observable<Array<Service>>{
          return this.http.get<Array<Service>>(this.baseUrl+"/services");
      }

      public deleteService(service:Service){
        return this.http.delete<Service>(this.baseUrl+"/services/"+service.id);
      }

      saveService(service:Service){
        return this.http.post<Service>(this.baseUrl+"/services",service);
      }

      getServiceById(serviceId: number){
        return this.http.get<Service>(this.baseUrl+"/services/"+serviceId);
      }

      updateService(service:Service){
        return this.http.put<Service>(this.baseUrl+"/services/"+service.id,service);
      }
}
