import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User.Model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  title="List of users";
  users$! :Observable<Array<User>>;
  constructor(private userService:UsersService,private router:Router){}
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
      this.users$=this.userService.getUsers();
  }


  DeleteUser(user:User){
    if(confirm("Do you sure to delete ?"))
      this.userService.deleteUser(user).subscribe({
        next:value =>{
          this.getUsers();
          //this.products$.pipe(filter(p=>p.id==product.id))
        }
      });
  }

  EditUser(user:User){
    this.router.navigateByUrl('/edituser/'+user.id);
  }
}
