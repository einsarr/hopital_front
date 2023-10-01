import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.Model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  title = "New User";

  formNewUser!:FormGroup;

  constructor(private fb: FormBuilder,private usersService:UsersService,private router:Router){
    this.form();
  }

  ngOnInit(){
    
  }

  form(){
    this.formNewUser = this.fb.group({
      prenom : ['',Validators.required],
      nom : ['',Validators.required],
      email : ['',Validators.required],
      telephone : ['',Validators.required],
      password : ['',Validators.required],
      role : ['',Validators.required],
      isActive : [true,Validators.required],
    });
  }

  saveUser(){
    let user:User=this.formNewUser.value;
    this.usersService.saveUser(user).subscribe({
      next : data =>{
        //alert(JSON.stringify(data));
        this.router.navigateByUrl('/users');
      }, error : err =>{
        console.log(err);
      }
    });
  }
}
