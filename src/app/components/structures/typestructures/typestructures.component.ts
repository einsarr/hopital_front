import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Typestructure } from 'src/app/models/Typestructure.Model';
import { TypestructureService } from 'src/app/services/typestructure.service';

@Component({
  selector: 'app-typestructures',
  templateUrl: './typestructures.component.html',
  styleUrls: ['./typestructures.component.scss']
})
export class TypestructuresComponent {
  title="List of typestructures";
  typestructures$! :Observable<Array<Typestructure>>;
  constructor(private typestructureService:TypestructureService,private router:Router){}
  ngOnInit() {
    this.getTypestructures();
  }

  getTypestructures(){
      this.typestructures$=this.typestructureService.getTypestructures();
  }


  DeleteTypestructure(typestructure:Typestructure){
    if(confirm("Do you sure to delete ?"))
      this.typestructureService.deleteTypestructure(typestructure).subscribe({
        next:value =>{
          this.getTypestructures();
        }
      });
  }

  EditTypestructure(typestructure:Typestructure){
    this.router.navigateByUrl('/edittypestructure/'+typestructure.id);
  }
}
