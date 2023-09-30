import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Lit } from 'src/app/models/Lit.Model';
import { LitService } from 'src/app/services/lit.service';

@Component({
  selector: 'app-lits',
  templateUrl: './lits.component.html',
  styleUrls: ['./lits.component.scss']
})
export class LitsComponent implements OnInit{
  title="List of lits";
  lits$! :Observable<Array<Lit>>;
  constructor(private litService:LitService,private router:Router){}
  ngOnInit() {
    this.getLits();
  }

  getLits(){
      this.lits$=this.litService.getLits();
  }


  DeleteLit(lit:Lit){
    if(confirm("Do you sure to delete ?"))
      this.litService.deleteLit(lit).subscribe({
        next:value =>{
          this.getLits();
          //this.products$.pipe(filter(p=>p.id==product.id))
        }
      });
  }

  EditLit(lit:Lit){
    this.router.navigateByUrl('/editlit/'+lit.id);
  }

  ReserveLit(lit:Lit){
    if(lit.disponibilite===true){
      this.router.navigateByUrl('/reserver/'+lit.id);
    }else{
      alert("Lit non disponible")
    }
    
  }
}
