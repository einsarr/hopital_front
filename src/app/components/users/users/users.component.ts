import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profil } from 'src/app/models/Profil.Model';
import { User } from 'src/app/models/User.Model';
import { ProfilService } from 'src/app/services/profil.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  title="List of users";
  users$! :Observable<Array<User>>;
  profils$! :Observable<Array<Profil>>;
  
  constructor(private userService:UsersService,private profilService:ProfilService,private router:Router){}
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
        }
      });
  }

  EditUser(user:User){
    this.router.navigateByUrl('/edituser/'+user.id);
  }

  getProfils(){
    this.profils$=this.profilService.getProfils();
  }
}
