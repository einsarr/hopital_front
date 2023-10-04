import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from 'src/app/models/Profil.Model';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss']
})
export class EditProfilComponent {
  title="Edit profil";
  profilId!:number;
  profilFormGroup!: FormGroup;

  constructor(private activeRoute : ActivatedRoute,private profilService:ProfilService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.profilId = this.activeRoute.snapshot.params['id'];
    this.profilService.getProfilById(this.profilId).subscribe({
      next : (profil)=>{
        this.profilFormGroup = this.fb.group({
          id : this.fb.control(profil.id),
          nom_profil : this.fb.control(profil.nom_profil),
          disponibilite : this.fb.control(profil.disponibilite),
        });
      },error : error=>{
        console.log(error);
      }
    });
  }

  updateProfil(){
    let profil: Profil = this.profilFormGroup.value;

    this.profilService.updateProfil(profil).subscribe({
      next : data=>{
        this.router.navigateByUrl('/profils');
      }
    });
  }
}
