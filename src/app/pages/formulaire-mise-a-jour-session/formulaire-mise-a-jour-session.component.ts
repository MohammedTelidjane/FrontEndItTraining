import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Session } from 'src/app/models/session';

@Component({
  selector: 'app-formulaire-mise-a-jour-session',
  templateUrl: './formulaire-mise-a-jour-session.component.html',
  styleUrls: ['./formulaire-mise-a-jour-session.component.css']
})
export class FormulaireMiseAJourSessionComponent implements OnInit {

  session: Session;
  sessionForm: FormGroup;

  constructor(private formBuilder:FormBuilder,
    public dialogRef:MatDialogRef<FormulaireMiseAJourSessionComponent>,
   @Inject(MatDialogModule) data) {
     this.sessionForm = this.formBuilder.group({
      prixHt: [0],
      dateDebut: [''],
      dateFin: [''],
      id:[0]
     })
    }

    valider() {
      this.dialogRef.close(this.sessionForm.value);
    }

    onClose(){
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
