import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User.Model';
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

  constructor(private activeRoute : ActivatedRoute,private usersServic:UsersService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.userId = this.activeRoute.snapshot.params['id'];
    this.usersServic.getUserById(this.userId).subscribe({
      next : (user)=>{
        this.userFormGroup = this.fb.group({
          id : this.fb.control(user.id),
          prenom : this.fb.control(user.prenom),
          nom : this.fb.control(user.nom),
          telephone : this.fb.control(user.telephone),
          email : this.fb.control(user.email),
          password : this.fb.control(user.password),
          role : this.fb.control(user.role),
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
  
}
