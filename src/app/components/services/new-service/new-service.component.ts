import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/app/models/Service.Model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.scss']
})
export class NewServiceComponent {
  title = "New Service";

  formNewService!:FormGroup;

  constructor(private fb: FormBuilder,private serviceService:ServiceService,private router:Router){
    this.form();
  }

  ngOnInit(){
    
  }

  form(){
    this.formNewService = this.fb.group({
      nom_service : ['',Validators.required],
      structure : ['',Validators.required],
      disponibilite : [true,Validators.required],
    });
  }

  
  saveService(){
    let service:Service=this.formNewService.value;
    this.serviceService.saveService(service).subscribe({
      next : data =>{
        //alert(JSON.stringify(data));
        this.router.navigateByUrl('/services');
      }, error : err =>{
        console.log(err);
      }
    });
  }
}
