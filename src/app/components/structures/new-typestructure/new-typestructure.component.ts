import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Typestructure } from 'src/app/models/Typestructure.Model';
import { TypestructureService } from 'src/app/services/typestructure.service';

@Component({
  selector: 'app-new-typestructure',
  templateUrl: './new-typestructure.component.html',
  styleUrls: ['./new-typestructure.component.scss']
})
export class NewTypestructureComponent {
  title = "New Typestructure";

  formNewTypestructure!:FormGroup;

  constructor(private fb: FormBuilder,private typestructureService:TypestructureService,private router:Router){
    this.form();
  }

  ngOnInit(){
    
  }

  form(){
    this.formNewTypestructure = this.fb.group({
      libelle_type_structure : ['',Validators.required],
      disponibilite : [true,Validators.required],
    });
  }

  saveTypestructure(){
    let typestructure:Typestructure=this.formNewTypestructure.value;
    this.typestructureService.saveTypestructure(typestructure).subscribe({
      next : data =>{
        this.router.navigateByUrl('/typestructures');
      }, error : err =>{
        console.log(err);
      }
    });
  }
}
