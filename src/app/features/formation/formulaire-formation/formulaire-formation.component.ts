import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formulaire-formation',
  templateUrl: './formulaire-formation.component.html',
  styleUrls: ['./formulaire-formation.component.css']
})
export class FormulaireFormationComponent implements OnInit {
 
  formationForm:FormGroup;
  @Output() ajouterFormation = new EventEmitter();

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

  ngOnInit(): void {
  }

}
