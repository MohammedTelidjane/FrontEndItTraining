import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formulaire-formation',
  templateUrl: './formulaire-formation.component.html',
  styleUrls: ['./formulaire-formation.component.css']
})
export class FormulaireFormationComponent implements OnInit {
  formation:Formation;
  formationForm:FormGroup;
  @Output() ajouterFormation = new EventEmitter();

  constructor(private formBuilder:FormBuilder, private formationService:FormationService) {
    this.formationForm=this.formBuilder.group({
      titre:[''],
      description:['']
    })
   }

   onSubmit(champDescription:string,champTitre:string):void{
     console.log("1");
     console.log(champDescription);
     console.log(champTitre);
    // console.log(this.formationForm.value);
    // this.formation.description=champDescription;
    // this.formation.titre=champTitre;
    // this.ajouterFormation.emit(this.formationForm.value);
  // console.log(this.formation.titre);
    console.log("2");
    console.log(this.formationForm.value);
  //  this.ajouterFormation.emit(this.formationForm.value);
    // this.formationService.save(this.formationForm.value).subscribe(console.log);
    console.log("3");
   }

  ngOnInit(): void {
  }

}
