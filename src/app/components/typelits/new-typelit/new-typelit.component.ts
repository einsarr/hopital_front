import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Typelit } from 'src/app/models/Typelit.Model';
import { TypelitService } from 'src/app/services/typelit.service';

@Component({
  selector: 'app-new-typelit',
  templateUrl: './new-typelit.component.html',
  styleUrls: ['./new-typelit.component.scss']
})
export class NewTypelitComponent {
  title = "New type lit";

  formNewTypelit!:FormGroup;

  typelits$! :Observable<Array<Typelit>>;
  constructor(private fb: FormBuilder,private typelitService:TypelitService,private router:Router){
    this.form();
  }

  ngOnInit(){
    this.getTypelits();
  }

  form(){
    this.formNewTypelit = this.fb.group({
      libelle_type_lit : ['',Validators.required],
      disponibilite : [true,Validators.required],
    });
  }

  saveTypelit(){
    let typelit:Typelit=this.formNewTypelit.value;
    this.typelitService.saveTypelit(typelit).subscribe({
      next : data =>{
        //alert(JSON.stringify(data));
        this.router.navigateByUrl('/typelits');
      }, error : err =>{
        console.log(err);
      }
    });
  }


  getTypelits(){
      this.typelits$=this.typelitService.getTypelits();
    }
}
