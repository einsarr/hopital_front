import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profil } from 'src/app/models/Profil.Model';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-new-profil',
  templateUrl: './new-profil.component.html',
  styleUrls: ['./new-profil.component.scss']
})
export class NewProfilComponent implements OnInit{
  title = "New Profil";

  formNewProfil!:FormGroup;

  constructor(private fb: FormBuilder,private profilService:ProfilService,private router:Router){
    this.form();
  }

  ngOnInit(){
    
  }

  form(){
    this.formNewProfil = this.fb.group({
      nom_profil : ['',Validators.required],
      disponibilite : [true,Validators.required],
    });
  }

  saveProfil(){
    let profil:Profil=this.formNewProfil.value;
    this.profilService.saveProfil(profil).subscribe({
      next : data =>{
        this.router.navigateByUrl('/profils');
      }, error : err =>{
        console.log(err);
      }
    });
  }
}
