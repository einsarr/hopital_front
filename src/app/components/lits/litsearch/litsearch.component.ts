import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Lit } from 'src/app/models/Lit.Model';
import { LitService } from 'src/app/services/lit.service';

@Component({
  selector: 'app-litsearch',
  templateUrl: './litsearch.component.html',
  styleUrls: ['./litsearch.component.scss']
})
export class LitsearchComponent implements OnInit{
  title="List of search lits";
  litId!:number;
  lits$! :Observable<Array<Lit>>;
  constructor(private activeRoute : ActivatedRoute,private litService:LitService,private router:Router){}
  ngOnInit() {
    //this.litId = this.activeRoute.snapshot.params['id'];
    this.getLits()
  }

  getLitsss(litId:number){
      this.router.navigateByUrl('/litsearch/'+litId);
  }

  getLits(){
    this.lits$=this.litService.getLits();
  }

  


}