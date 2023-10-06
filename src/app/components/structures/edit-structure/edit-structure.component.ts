import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Structure } from 'src/app/models/Structure.Model';
import { Typestructure } from 'src/app/models/Typestructure.Model';
import { StructureService } from 'src/app/services/structure.service';
import { TypestructureService } from 'src/app/services/typestructure.service';

@Component({
  selector: 'app-edit-structure',
  templateUrl: './edit-structure.component.html',
  styleUrls: ['./edit-structure.component.scss']
})
export class EditStructureComponent {
  title="Edit structure";
  structureId!:number;
  FormGroupstructure!: FormGroup;
  typestructures$! :Observable<Array<Typestructure>>;
  constructor(private activeRoute : ActivatedRoute,private structureService:StructureService,private typestructureService:TypestructureService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.getTypestructures();
    this.structureId = this.activeRoute.snapshot.params['id'];
    this.structureService.getStructureById(this.structureId).subscribe({
      next : (structure)=>{
        this.FormGroupstructure = this.fb.group({
          id : this.fb.control(structure.id),
          nom_structure : this.fb.control(structure.nom_structure),
          adresse : this.fb.control(structure.adresse),
          telephone : this.fb.control(structure.telephone),
          email : this.fb.control(structure.email),
          fax : this.fb.control(structure.fax),
          typestructure : this.fb.control(structure.typestructure),
          disponibilite : this.fb.control(structure.disponibilite),
        });
      },error : error=>{
        console.log(error);
      }
    });
  }

  updateStructure(){
    let structure: Structure = this.FormGroupstructure.value;

    this.structureService.updateStructure(structure).subscribe({
      next : data=>{
        this.router.navigateByUrl('/structures');
      }
    });
  }

  getTypestructures(){
    this.typestructures$=this.typestructureService.getTypestructures();
  }

}
