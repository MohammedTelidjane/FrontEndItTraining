import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Formateur } from 'src/app/models/Formateur';

@Component({
  selector: 'app-formulaire-mise-a-jour-formateur',
  templateUrl: './formulaire-mise-a-jour-formateur.component.html',
  styleUrls: ['./formulaire-mise-a-jour-formateur.component.css']
})
export class FormulaireMiseAJourFormateurComponent implements OnInit {

  formateur: Formateur;
  formateurForm: FormGroup;

  constructor(private formBuilder:FormBuilder,
    public dialogRef:MatDialogRef<FormulaireMiseAJourFormateurComponent>,
   @Inject(MatDialogModule) data) {
      this.formateurForm = this.formBuilder.group({
        nom: [''],
          prenom: [''],
          dateNaissance: [''],
          entreprise: [''],
          telephone: [''],
          email: [''],
          id:[0]
      })
    }

    valider() {
      this.dialogRef.close(this.formateurForm.value);
    }

    onClose(){
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
