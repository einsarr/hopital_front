import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Structure } from 'src/app/models/Structure.Model';
import { StructureService } from 'src/app/services/structure.service';

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.scss']
})
export class StructuresComponent implements OnInit {
  title="List of structures";
  structures$! :Observable<Array<Structure>>;
  constructor(private structureService:StructureService,private router:Router){}
  ngOnInit() {
    this.getStructures();
  }

  getStructures(){
      this.structures$=this.structureService.getStructures();
  }


  DeleteStructure(structure:Structure){
    if(confirm("Do you sure to delete ?"))
      this.structureService.deleteStructure(structure).subscribe({
        next:value =>{
          this.getStructures();
          //this.products$.pipe(filter(p=>p.id==product.id))
        }
      });
  }

  EditStructure(structure:Structure){
    this.router.navigateByUrl('/editstructure/'+structure.id);
  }
}
