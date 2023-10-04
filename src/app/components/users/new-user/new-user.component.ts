import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profil } from 'src/app/models/Profil.Model';
import { User } from 'src/app/models/User.Model';
import { ProfilService } from 'src/app/services/profil.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  title = "New User";

  formNewUser!:FormGroup;
  profils$! :Observable<Array<Profil>>;
  constructor(private fb: FormBuilder,private usersService:UsersService,private profilService:ProfilService,private router:Router){
    this.form();
  }

  ngOnInit(){
    this.getProfils();
  }

  form(){
    this.formNewUser = this.fb.group({
      prenom : ['',Validators.required],
      nom : ['',Validators.required],
      email : ['',Validators.required],
      telephone : ['',Validators.required],
      password : ['',Validators.required],
      profil : ['',Validators.required],
      isActive : [true,Validators.required],
    });
  }

  saveUser(){
    let user:User=this.formNewUser.value;
    this.usersService.saveUser(user).subscribe({
      next : data =>{
        this.router.navigateByUrl('/users');
      }, error : err =>{
        console.log(err);
      }
    });
  }

  getProfils(){
    this.profils$=this.profilService.getProfils();
  }

}
