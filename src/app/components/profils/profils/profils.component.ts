import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profil } from 'src/app/models/Profil.Model';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.scss']
})
export class ProfilsComponent {
  title="List of profils";
  profils$! :Observable<Array<Profil>>;
  constructor(private profilService:ProfilService,private router:Router){}
  ngOnInit() {
    this.getProfils();
  }

  getProfils(){
      this.profils$=this.profilService.getProfils();
  }


  DeleteProfil(profil:Profil){
    if(confirm("Do you sure to delete ?"))
      this.profilService.deleteProfil(profil).subscribe({
        next:value =>{
          this.getProfils();
        }
      });
  }

  EditProfil(profil:Profil){
    this.router.navigateByUrl('/editprofil/'+profil.id);
  }
}
