import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Salle } from 'src/app/models/Salle.Model';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-edit-salle',
  templateUrl: './edit-salle.component.html',
  styleUrls: ['./edit-salle.component.scss']
})
export class EditSalleComponent {
  title="Edit salle";
  salleId!:number;
  salleFormGroup!: FormGroup;

  constructor(private activeRoute : ActivatedRoute,private salleService:SalleService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.salleId = this.activeRoute.snapshot.params['id'];
    this.salleService.getSalleById(this.salleId).subscribe({
      next : (salle)=>{
        this.salleFormGroup = this.fb.group({
          id : this.fb.control(salle.id),
          nom_salle : this.fb.control(salle.nom_salle),
          service : this.fb.control(salle.service),
          type_salle : this.fb.control(salle.type_salle),
          disponibilite : this.fb.control(salle.disponibilite),
        });
      },error : error=>{
        console.log(error);
      }
    });
  }

  updateSalle(){
    let salle: Salle = this.salleFormGroup.value;

    this.salleService.updateSalle(salle).subscribe({
      next : data=>{
        this.router.navigateByUrl('/salles');
      }
    });
  }
}
