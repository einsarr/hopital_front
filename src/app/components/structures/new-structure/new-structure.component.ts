import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Structure } from 'src/app/models/Structure.Model';
import { Typestructure } from 'src/app/models/Typestructure.Model';
import { StructureService } from 'src/app/services/structure.service';
import { TypestructureService } from 'src/app/services/typestructure.service';

@Component({
  selector: 'app-new-structure',
  templateUrl: './new-structure.component.html',
  styleUrls: ['./new-structure.component.scss']
})
export class NewStructureComponent implements OnInit{
  title = "New Structure";

  formNewStructure!:FormGroup;
  typestructures$! :Observable<Array<Typestructure>>;
  constructor(private fb: FormBuilder,private structureService:StructureService,private typestructureService:TypestructureService,private router:Router){
    this.form();
  }

  ngOnInit(){
    this.getTypestructures();
  }

  form(){
    this.formNewStructure = this.fb.group({
      nom_structure : ['',Validators.required],
      adresse : ['',Validators.required],
      telephone : ['',Validators.required],
      email : ['',Validators.required],
      fax : ['',Validators.required],
      typestructure : ['',Validators.required],
      disponibilite : [true,Validators.required],
    });
  }

  saveStructure(){
    let structure:Structure=this.formNewStructure.value;
    this.structureService.saveStructure(structure).subscribe({
      next : data =>{
        this.router.navigateByUrl('/structures');
      }, error : err =>{
        console.log(err);
      }
    });
  }

  getTypestructures(){
    this.typestructures$=this.typestructureService.getTypestructures();
  }

}
