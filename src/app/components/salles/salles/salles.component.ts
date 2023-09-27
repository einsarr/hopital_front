import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Salle } from 'src/app/models/Salle.Model';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.scss']
})
export class SallesComponent implements OnInit{
  title="List of salles";
  salles$! :Observable<Array<Salle>>;
  constructor(private salleService:SalleService,private router:Router){}
  ngOnInit() {
    this.getSalles();
  }

  getSalles(){
      this.salles$=this.salleService.getSalles();
  }


  DeleteSalle(salle:Salle){
    if(confirm("Do you sure to delete ?"))
      this.salleService.deleteSalle(salle).subscribe({
        next:value =>{
          this.getSalles();
          //this.products$.pipe(filter(p=>p.id==product.id))
        }
      });
  }

  EditSalle(salle:Salle){
    this.router.navigateByUrl('/editsalle/'+salle.id);
  }
}
