import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Service } from 'src/app/models/Service.Model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
    title="List of services";
    services$! :Observable<Array<Service>>;
    constructor(private serviceService:ServiceService,private router:Router){}
    ngOnInit() {
      this.getServices();
    }

    getServices(){
        this.services$=this.serviceService.getServices();
    }


    DeleteService(service:Service){
      if(confirm("Do you sure to delete ?"))
        this.serviceService.deleteService(service).subscribe({
          next:value =>{
            this.getServices();
            //this.products$.pipe(filter(p=>p.id==product.id))
          }
        });
    }

    EditService(service:Service){
      this.router.navigateByUrl('/editservice/'+service.id);
    }
}
