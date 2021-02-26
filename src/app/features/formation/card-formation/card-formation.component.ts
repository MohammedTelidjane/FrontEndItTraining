import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-card-formation',
  templateUrl: './card-formation.component.html',
  styleUrls: ['./card-formation.component.css']
})
export class CardFormationComponent implements OnInit, OnChanges {
  // @Input() formation: Formation;
   formations: Formation[]=[];

  constructor(private router:Router, private formationService:FormationService ) { 
    this.formationService.findAll().subscribe(res=>this.formations=res);

    // console.log(this.formation);
    // this.router.navigate(['/cardFormations']);
  }
  
  ngOnChanges(ttt:any){
    console.log("verifier donneé coté card")
    console.log(this.formations)
  }

  ngOnInit(): void {
    console.log(this.formations);
  }
  
  

}
