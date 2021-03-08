import { Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css'],


 
})
export class ListeFormationComponent implements OnInit {
  // @Input() formations: Formation[]=[];
  formations: Formation[]=[];
  text1: string = 
  '<span style="color: red">red text</span>' + '<br>' +
  '<span style="text-decoration: line-through">crossed out text</span>' + '<br>' +
  '<span style="text-decoration: overline">overline text</span>' + '<br>' +
  '<span style="text-decoration: underline">underline text</span>';
  formationForm:FormGroup;
  

  constructor(private formBuilder:FormBuilder, private formationService:FormationService) {
    this.formationForm=this.formBuilder.group({
      titre:[''],
      description:['']
    })
   }

   onSubmit(){
    console.log(this.formationForm.value);
   // this.ajouterFormation.emit(this.formationForm.value);
    this.formationService.save(this.formationForm.value).subscribe(console.log);
   }

  recupererToutesFormations() :void {
    console.log("verifier findall1");
    this.formationService.findAll().subscribe(res=>this.formations=res);
    console.log("verifier findall3");
    console.log(this.formations);
    console.log("verifier findall4");
   // this.router.navigate(['/listeFormationsAdministrateur']);
 }
  SupprimerParId(id:number):void{
   
    this.formationService.delete(id).subscribe();

  } 

  MettreAJourUneFormation(formation:Formation):void{
  let inputValDescription = (<HTMLInputElement>document.getElementById("myInputEditor")).value;
  let inputValTitre = (<HTMLInputElement>document.getElementById("myInputChampText")).value;
   formation.description=inputValDescription;
   formation.titre=inputValTitre;
   this.formationService.save(formation).subscribe(console.log);

  }
  ngOnInit(): void {
    //this.formationService.findAll().subscribe(res=>this.formations=res);

  }

}
