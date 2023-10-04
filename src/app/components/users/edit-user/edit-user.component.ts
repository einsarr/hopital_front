import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profil } from 'src/app/models/Profil.Model';
import { User } from 'src/app/models/User.Model';
import { ProfilService } from 'src/app/services/profil.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  title="Edit user";
  userId!:number;
  userFormGroup!: FormGroup;
  profils$! :Observable<Array<Profil>>;
  constructor(private activeRoute : ActivatedRoute,private usersServic:UsersService,private profilService:ProfilService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.userId = this.activeRoute.snapshot.params['id'];
    this.getProfils();
    this.usersServic.getUserById(this.userId).subscribe({
      next : (user)=>{
        this.userFormGroup = this.fb.group({
          id : this.fb.control(user.id),
          prenom : this.fb.control(user.prenom),
          nom : this.fb.control(user.nom),
          telephone : this.fb.control(user.telephone),
          email : this.fb.control(user.email),
          password : this.fb.control(user.password),
          profil : this.fb.control(user.profil),
          isActive : this.fb.control(user.isActive),
        });
      },error : error=>{
        console.log(error);
      }
    });
  }

  updateUser(){
    let user: User = this.userFormGroup.value;

    this.usersServic.updateUser(user).subscribe({
      next : data=>{
        this.router.navigateByUrl('/users');
      }
    });
  }
  
  getProfils(){
    this.profils$=this.profilService.getProfils();
  }

}
