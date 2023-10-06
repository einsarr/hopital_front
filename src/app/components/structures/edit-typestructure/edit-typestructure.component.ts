import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Typestructure } from 'src/app/models/Typestructure.Model';
import { StructureService } from 'src/app/services/structure.service';
import { TypestructureService } from 'src/app/services/typestructure.service';

@Component({
  selector: 'app-edit-typestructure',
  templateUrl: './edit-typestructure.component.html',
  styleUrls: ['./edit-typestructure.component.scss']
})
export class EditTypestructureComponent {
  title="Edit structure";
  structureId!:number;
  FormGrouptypestructure!: FormGroup;
  constructor(private activeRoute : ActivatedRoute,private typestructureService:TypestructureService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.structureId = this.activeRoute.snapshot.params['id'];
    this.typestructureService.getTypestructureById(this.structureId).subscribe({
      next : (typestructure)=>{
        this.FormGrouptypestructure = this.fb.group({
          id : this.fb.control(typestructure.id),
          libelle_type_structure : this.fb.control(typestructure.libelle_type_structure),
          disponibilite : this.fb.control(typestructure.disponibilite),
        });
      },error : error=>{
        console.log(error);
      }
    });
  }

  updateTypestructure(){
    let typestructure: Typestructure = this.FormGrouptypestructure.value;

    this.typestructureService.updateTypestructure(typestructure).subscribe({
      next : data=>{
        this.router.navigateByUrl('/typestructures');
      }
    });
  }
}
