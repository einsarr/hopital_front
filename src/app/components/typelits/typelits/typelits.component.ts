import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Typelit } from 'src/app/models/Typelit.Model';
import { TypelitService } from 'src/app/services/typelit.service';

@Component({
  selector: 'app-typelits',
  templateUrl: './typelits.component.html',
  styleUrls: ['./typelits.component.scss']
})
export class TypelitsComponent implements OnInit{
  title="List of Typelits";
  typelits$! :Observable<Array<Typelit>>;
  constructor(private typelitsService:TypelitService,private router:Router){}
  ngOnInit() {
    this.getTypelits();
  }

  getTypelits(){
      this.typelits$=this.typelitsService.getTypelits();
  }


  DeleteTypelit(typelit:Typelit){
      if(confirm("Do you sure to delete ?"))
      this.typelitsService.deleteTypelit(typelit).subscribe({
        next:value =>{
          this.getTypelits();
          //this.products$.pipe(filter(p=>p.id==product.id))
        }
      });
  }

  EditTypelit(typelit:Typelit){
      this.router.navigateByUrl('/edittypelit/'+typelit.id);
  }

}
