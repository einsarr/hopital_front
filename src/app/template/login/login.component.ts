import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  userdata:any;

  constructor(private formBuilder : FormBuilder,private authService:AuthService, private http : HttpClient,private router:Router){
    sessionStorage.clear();
  }

  ngOnInit(): void {
    
  }

  loginForm = this.formBuilder.group({
    id:this.formBuilder.control('',Validators.required),
    password:this.formBuilder.control('',Validators.required),
  });


  login(){
      if(this.loginForm.valid){
        this.authService.getById(this.loginForm.value.id).subscribe(res=>{
          this.userdata = res;
          //console.log(this.userdata);
          if(this.userdata.password === this.loginForm.value.password){
            if(this.userdata.isActive){
              sessionStorage.setItem('email',this.userdata.id);
              sessionStorage.setItem('userrole',this.userdata.role);
              this.router.navigate(['dashboard']);
              console.log(localStorage.getItem('userrole'));
            }else{
              alert("User disabled");
            }
          }else{
            alert("Invalid credentials");
          }
        })
      }
  }

  

}
