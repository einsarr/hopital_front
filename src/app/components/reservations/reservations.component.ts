import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Lit } from 'src/app/models/Lit.Model';
import { Reservation } from 'src/app/models/Reservation.Model';
import { Typelit } from 'src/app/models/Typelit.Model';
import { LitService } from 'src/app/services/lit.service';
import { ReserverService } from 'src/app/services/reserver.service';
import { TypelitService } from 'src/app/services/typelit.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit{
  title="List of reservations";
  lits$! :Observable<Array<Reservation>>;
  typelits$! :Observable<Array<Typelit>>;

  formSearch!:FormGroup;

  constructor(private reservationService:ReserverService,private litService:LitService,private router:Router,private typelitService:TypelitService){}
  ngOnInit() {
    this.getReservations();
    this.getTypelits();
  }

  searchLit(){
    let lit:Lit=this.formSearch.value;
    console.log(lit.nom_lit);
  }

  

  getReservations(){
      this.lits$=this.reservationService.getReservations();
  }

  getTypelits(){
    this.typelits$=this.typelitService.getTypelits();
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
