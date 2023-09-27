import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/models/Service.Model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent {
  title="Edit lit";
  serviceId!:number;
  serviceFormGroup!: FormGroup;

  constructor(private activeRoute : ActivatedRoute,private serviceService:ServiceService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.serviceId = this.activeRoute.snapshot.params['id'];
    this.serviceService.getServiceById(this.serviceId).subscribe({
      next : (service)=>{
        this.serviceFormGroup = this.fb.group({
          id : this.fb.control(service.id),
          nom_service : this.fb.control(service.nom_service),
          structure : this.fb.control(service.structure),
          disponibilite : this.fb.control(service.disponibilite),
        });
      },error : error=>{
        console.log(error);
      }
    });
  }

  updateService(){
    let service: Service = this.serviceFormGroup.value;

    this.serviceService.updateService(service).subscribe({
      next : data=>{
        this.router.navigateByUrl('/services');
      }
    });
  }
}
