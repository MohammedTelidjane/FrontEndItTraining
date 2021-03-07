import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-page-formation-administrateur',
  templateUrl: './page-formation-administrateur.component.html',
  styleUrls: ['./page-formation-administrateur.component.css']
})
export class PageFormationAdministrateurComponent implements OnInit {
  formations: Formation[]=[];
  text1: string = 
  '<span style="color: red">red text</span>' + '<br>' +
  '<span style="text-decoration: line-through">crossed out text</span>' + '<br>' +
  '<span style="text-decoration: overline">overline text</span>' + '<br>' +
  '<span style="text-decoration: underline">underline text</span>';

 
  constructor(private formationService: FormationService) { }


  recupererToutesFormations() :void {
    console.log("verifier findall1");
    this.formationService.findAll().subscribe(res=>this.formations=res);
    console.log("verifier findall3");
    console.log(this.formations);
   // this.router.navigate(['/listeFormationsAdministrateur']);
 }

  ngOnInit(): void {
    this.formationService.findAll().subscribe(res=>this.formations=res);
  }

}
