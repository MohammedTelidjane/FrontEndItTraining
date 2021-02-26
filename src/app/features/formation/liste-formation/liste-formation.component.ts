import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css']
})
export class ListeFormationComponent implements OnInit {
  @Input() formations: Formation[]=[];
  

  constructor(private formationService:FormationService,  private router:Router) { }

  recupererToutesFormations() :void {
    console.log("verifier findall1");
    this.formationService.findAll().subscribe(res=>this.formations=res);
    console.log("verifier findall3");
    console.log(this.formations);
    this.router.navigate(['/listeFormationsAdministrateur']);
 }
  SupprimerParId(id:number){
   
    this.formationService.delete(id).subscribe();

  } 
  ngOnInit(): void {
  }

}
