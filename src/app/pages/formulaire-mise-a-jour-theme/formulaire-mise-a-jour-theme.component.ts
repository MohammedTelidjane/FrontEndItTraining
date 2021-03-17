import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Theme } from 'src/app/models/Theme';

@Component({
  selector: 'app-formulaire-mise-a-jour-theme',
  templateUrl: './formulaire-mise-a-jour-theme.component.html',
  styleUrls: ['./formulaire-mise-a-jour-theme.component.css']
})
export class FormulaireMiseAJourThemeComponent implements OnInit {

theme: Theme;
themeForm: FormGroup;

  constructor(private formBuilder:FormBuilder,
    public dialogRef:MatDialogRef<FormulaireMiseAJourThemeComponent>,
   @Inject(MatDialogModule) data) {
     this.themeForm = this.formBuilder.group({
      nom: [''],
      id:[0]
     })
    }

    valider() {
      this.dialogRef.close(this.themeForm.value);
    }

    onClose(){
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
