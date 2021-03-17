import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Participant } from 'src/app/models/participant';
import { FormulaireMiseAjourComponent } from '../formulaire-mise-ajour/formulaire-mise-ajour.component';

@Component({
  selector: 'app-formulaire-mise-a-jour-participant',
  templateUrl: './formulaire-mise-a-jour-participant.component.html',
  styleUrls: ['./formulaire-mise-a-jour-participant.component.css']
})
export class FormulaireMiseAJourParticipantComponent implements OnInit {

  
  participant: Participant;
  participantForm: FormGroup;

  constructor(private formBuilder:FormBuilder,
    public dialogRef:MatDialogRef<FormulaireMiseAJourParticipantComponent>,
   @Inject(MatDialogModule) data) {
    this.participantForm = this.formBuilder.group({
    nom: [''],
    prenom: [''],
    dateNaissance: [''],
    id:[''],
    telephone: [''],
    email: ['']
    })

    }

    valider() {
      this.dialogRef.close(this.participantForm.value);
    }

    onClose(){
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
