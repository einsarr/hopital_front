import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Lit } from 'src/app/models/Lit.Model';
import { Salle } from 'src/app/models/Salle.Model';
import { LitService } from 'src/app/services/lit.service';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-new-lit',
  templateUrl: './new-lit.component.html',
  styleUrls: ['./new-lit.component.scss']
})
export class NewLitComponent {
  title = "New Product";

  formNewLit!:FormGroup;

  salles$! :Observable<Array<Salle>>;
  constructor(private fb: FormBuilder,private litService:LitService,private salleService:SalleService,private router:Router){
    this.form();
  }

  ngOnInit(){
    this.getSalles();
  }

  form(){
    this.formNewLit = this.fb.group({
      nom_lit : ['',Validators.required],
      type_lit : ['',Validators.required],
      salle : ['',Validators.required],
      disponibilite : [true,Validators.required],
      monitoring : [false,Validators.required],
      oxygene : [false,Validators.required],
    });
  }

  saveLit(){
    let lit:Lit=this.formNewLit.value;
    this.litService.saveLit(lit).subscribe({
      next : data =>{
        //alert(JSON.stringify(data));
        this.router.navigateByUrl('/lits');
      }, error : err =>{
        console.log(err);
      }
    });
  }

 /* getSalles(){
    this.salleService.getSalles().subscribe(data=>{
      this.salles.push(...data);
    }, error => {
        console.log(error)
    })
  }
*/
    getSalles(){
      this.salles$=this.salleService.getSalles();
    }

}
