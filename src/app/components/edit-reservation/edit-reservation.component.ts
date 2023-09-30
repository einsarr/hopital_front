import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation.Model';
import { ReserverService } from 'src/app/services/reserver.service';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.scss']
})
export class EditReservationComponent implements OnInit{
  title="Edit reservation";
  reserverId!:number;
  reserveFormGroup!: FormGroup;

  constructor(private activeRoute : ActivatedRoute,private reservationService:ReserverService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.reserverId = this.activeRoute.snapshot.params['id'];
    //console.log(this.reserverId);
    this.reservationService.getReservationById(this.reserverId).subscribe({
      next : (reservation)=>{
        this.reserveFormGroup = this.fb.group({
          id : this.fb.control(reservation.id),
          nom_lit : this.fb.control(reservation.nom_lit),
          type_lit : this.fb.control(reservation.type_lit),
          salle : this.fb.control(reservation.salle),
          disponibilite : this.fb.control(reservation.disponibilite),
          monitoring : this.fb.control(reservation.monitoring),
          oxygene : this.fb.control(reservation.oxygene),
          date_debut : this.fb.control(reservation.date_debut),
          date_fin : this.fb.control(reservation.date_fin)
        });
      },error : error=>{
        console.log(error);
      }
    });
  }

  updateReservation(){
    let reservation: Reservation = this.reserveFormGroup.value;

    this.reservationService.updateReservation(reservation).subscribe({
      next : data=>{
        this.router.navigateByUrl('/reservations');
      }
    });
  }
}
