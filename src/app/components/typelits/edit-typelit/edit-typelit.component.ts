import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Typelit } from 'src/app/models/Typelit.Model';
import { TypelitService } from 'src/app/services/typelit.service';

@Component({
  selector: 'app-edit-typelit',
  templateUrl: './edit-typelit.component.html',
  styleUrls: ['./edit-typelit.component.scss']
})
export class EditTypelitComponent {
  title="Edit type lit";
  typelitId!:number;
  typelitFormGroup!: FormGroup;

  constructor(private activeRoute : ActivatedRoute,private typelitService:TypelitService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.typelitId = this.activeRoute.snapshot.params['id'];
    this.typelitService.getTypelitById(this.typelitId).subscribe({
      next : (typelit)=>{
        this.typelitFormGroup = this.fb.group({
          id : this.fb.control(typelit.id),
          libelle_type_lit : this.fb.control(typelit.libelle_type_lit),
          disponibilite : this.fb.control(typelit.disponibilite),
        });
      },error : error=>{
        console.log(error);
      }
    });
  }

  updateTypelit(){
    let typelit: Typelit = this.typelitFormGroup.value;

    this.typelitService.updateTypelit(typelit).subscribe({
      next : data=>{
        this.router.navigateByUrl('/typelits');
      }
    });
  }
}
