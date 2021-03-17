import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-formulaire-participant',
  templateUrl: './formulaire-participant.component.html',
  styleUrls: ['./formulaire-participant.component.css']
})
export class FormulaireParticipantComponent implements OnInit {

  participantForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private participantService: ParticipantService
  ) {
    this.participantForm = this.formBuilder.group({
      nom: [''],
    prenom: [''],
    dateNaissance: [''],
    telephone: [''],
    email: ['']
    });
   }

   onSubmit(): void {
     this.participantService.create(this.participantForm.value)
     .subscribe();
     console.log(this.participantForm.value);
   }

  ngOnInit(): void {
  }

}
