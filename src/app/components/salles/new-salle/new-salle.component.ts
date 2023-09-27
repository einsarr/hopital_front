import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Salle } from 'src/app/models/Salle.Model';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-new-salle',
  templateUrl: './new-salle.component.html',
  styleUrls: ['./new-salle.component.scss']
})
export class NewSalleComponent {
  title = "New Salle";

  formNewSalle!:FormGroup;

  constructor(private fb: FormBuilder,private salleService:SalleService,private router:Router){
    this.form();
  }

  ngOnInit(){
    
  }

  form(){
    this.formNewSalle = this.fb.group({
      nom_salle : ['',Validators.required],
      service : ['',Validators.required],
      type_salle : ['',Validators.required],
      disponibilite : [false,Validators.required],
    });
  }

  saveSalle(){
    let salle:Salle=this.formNewSalle.value;
    this.salleService.saveSalle(salle).subscribe({
      next : data =>{
        //alert(JSON.stringify(data));
        this.router.navigateByUrl('/salles');
      }, error : err =>{
        console.log(err);
      }
    });
  }
}
