import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User.Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl:string = "http://localhost:3000";

      constructor(private http:HttpClient) { }

      public getUsers():Observable<Array<User>>{
          return this.http.get<Array<User>>(this.baseUrl+"/users");
      }

      public deleteUser(user:User){
        return this.http.delete<User>(this.baseUrl+"/users/"+user.id);
      }

      saveUser(user:User){
        return this.http.post<User>(this.baseUrl+"/users",user);
      }

      getUserById(litId: number){
        return this.http.get<User>(this.baseUrl+"/users/"+litId);
      }

      updateUser(user:User){
        return this.http.put<User>(this.baseUrl+"/users/"+user.id,user);
      }
}
