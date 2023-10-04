import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Lit } from 'src/app/models/Lit.Model';
import { Salle } from 'src/app/models/Salle.Model';
import { Typelit } from 'src/app/models/Typelit.Model';
import { LitService } from 'src/app/services/lit.service';
import { SalleService } from 'src/app/services/salle.service';
import { TypelitService } from 'src/app/services/typelit.service';

@Component({
  selector: 'app-edit-lit',
  templateUrl: './edit-lit.component.html',
  styleUrls: ['./edit-lit.component.scss']
})
export class EditLitComponent implements OnInit{
  title="Edit lit";
  litId!:number;
  litFormGroup!: FormGroup;
  salles$! :Observable<Array<Salle>>;
  typelits$! :Observable<Array<Typelit>>;
  constructor(private activeRoute : ActivatedRoute,private salleService:SalleService,private typelitService:TypelitService,private litService:LitService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.litId = this.activeRoute.snapshot.params['id'];
    this.getSalles();
    this.getTypelits();
    this.litService.getLitById(this.litId).subscribe({
      next : (lit)=>{
        this.litFormGroup = this.fb.group({
          id : this.fb.control(lit.id),
          nom_lit : this.fb.control(lit.nom_lit),
          type_lit : this.fb.control(lit.type_lit),
          salle : this.fb.control(lit.salle),
          disponibilite : this.fb.control(lit.disponibilite),
          monitoring : this.fb.control(lit.monitoring),
          oxygene : this.fb.control(lit.oxygene)
        });
      },error : error=>{
        console.log(error);
      }
    });
  }

  updateLit(){
    let lit: Lit = this.litFormGroup.value;

    this.litService.updateLit(lit).subscribe({
      next : data=>{
        this.router.navigateByUrl('/lits');
      }
    });
  }

  getSalles(){
    this.salles$=this.salleService.getSalles();
  }

  getTypelits(){
    this.typelits$=this.typelitService.getTypelits();
  }


}
