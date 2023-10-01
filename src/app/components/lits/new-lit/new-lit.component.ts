import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Lit } from 'src/app/models/Lit.Model';
import { LitService } from 'src/app/services/lit.service';

@Component({
  selector: 'app-new-lit',
  templateUrl: './new-lit.component.html',
  styleUrls: ['./new-lit.component.scss']
})
export class NewLitComponent {
  title = "New Product";

  formNewLit!:FormGroup;

  constructor(private fb: FormBuilder,private litService:LitService,private router:Router){
    this.form();
  }

  ngOnInit(){
    
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
}
