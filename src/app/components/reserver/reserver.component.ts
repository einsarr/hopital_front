import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lit } from 'src/app/models/Lit.Model';
import { Reservation } from 'src/app/models/Reservation.Model';
import { LitService } from 'src/app/services/lit.service';
import { ReserverService } from 'src/app/services/reserver.service';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.scss']
})
export class ReserverComponent implements OnInit{
  title="Edit lit";
  litId!:number;
  reservationFormGroup!: FormGroup;

  constructor(private activeRoute : ActivatedRoute,private reseverService:ReserverService,private litService:LitService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.litId = this.activeRoute.snapshot.params['id'];
    //console.log(this.litId);
    this.litService.getLitById(this.litId).subscribe({
      next : (lit)=>{
        this.reservationFormGroup = this.fb.group({
          id : this.fb.control(lit.id),
          nom_lit : this.fb.control(lit.nom_lit),
          type_lit : this.fb.control(lit.type_lit),
          salle : this.fb.control(lit.salle),
          disponibilite : this.fb.control(lit.disponibilite),
          monitoring : this.fb.control(lit.monitoring),
          oxygene : this.fb.control(lit.oxygene),
          date_debut : ['',Validators.required],
          date_fin : ['',Validators.required]
        });
      },error : error=>{
        console.log(error);
      }
    });
  }

  ReserverLit(){
    let reservation: Reservation = this.reservationFormGroup.value;
    //console.log(reservation);

    this.reseverService.saveReservation(reservation).subscribe({
      next : data=>{
        //this.router.navigateByUrl('/lits');
      }
    });

    this.litService.disponibiliteLit(reservation).subscribe({
      next : updateLit =>{
        reservation.disponibilite=!reservation.disponibilite
      }
    });
    this.router.navigateByUrl('/lits');
    
  }
}
