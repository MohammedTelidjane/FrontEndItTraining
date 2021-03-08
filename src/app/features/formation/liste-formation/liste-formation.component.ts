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
    //console.log("verifier findall1");
    this.formationService.findAll().subscribe(res=>this.formations=res);
   // console.log("verifier findall3");
    console.log(this.formations);
   // this.router.navigate(['/listeFormationsAdministrateur']);
 }
  SupprimerParId(id:number):void{
   
    this.formationService.delete(id).subscribe();

  } 

  MettreAJourUneFormation(formation:Formation,valTitre:string,valDescription:string):void{
   // console.log("avant les inputs");
   // console.log(formation.id);
   // console.log(formation.titre);
   // console.log(formation.description);
  // let inputValDescription = (<HTMLInputElement>document.getElementById("myInputEditor")).value;
  // let inputValTitre = (<HTMLInputElement>document.getElementById("myInputChampText")).value;
  console.log(formation);
  //  formation.description=inputValDescription;
  //  formation.titre=inputValTitre;
  formation.titre=valTitre;
  formation.description=valDescription;
   //console.log("avant dappler save");
  // console.log(formation.description);
  // console.log(formation.titre);
   this.formationService.save(formation).subscribe(console.log);
   //console.log("apresdappler save");

  }
  ngOnInit(): void {
    this.formationService.findAll().subscribe(res=>this.formations=res);

  }

}
