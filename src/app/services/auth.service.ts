import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseAPI='http://localhost:3000/users'
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.baseAPI);
  }

  getById(id:any){
    return this.http.get(this.baseAPI+'/'+id);
  }

  registerData(inputdata:any){
    return this.http.post(this.baseAPI, inputdata);
  }

  updateData(id:any, inputdata:any){
    return this.http.put(this.baseAPI+'/'+id,inputdata);
  }

  isLoggedIn(){
    return sessionStorage.getItem('email')!=null;
  }

  getUserRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
}
