import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/Reservation.Model';
import { LitService } from 'src/app/services/lit.service';
import { ReserverService } from 'src/app/services/reserver.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit{
  title="List of reservations";
  lits$! :Observable<Array<Reservation>>;
  constructor(private reservationService:ReserverService,private litService:LitService,private router:Router){}
  ngOnInit() {
    this.getReservations();
  }

  getReservations(){
      this.lits$=this.reservationService.getReservations();
  }


  DeleteReservation(reservation:Reservation){
    if(confirm("Do you sure to delete ?"))
      this.reservationService.deleteReservation(reservation).subscribe({
        next:value =>{
          this.getReservations();
          //this.products$.pipe(filter(p=>p.id==product.id))
        }
      });

      this.litService.disponibiliteLit(reservation).subscribe({
        next : updateLit =>{
          reservation.disponibilite=!reservation.disponibilite
        }
      });
  }

  EditReservation(reservation:Reservation){
    this.router.navigateByUrl('/editreservation/'+reservation.id);
  }

  
}
