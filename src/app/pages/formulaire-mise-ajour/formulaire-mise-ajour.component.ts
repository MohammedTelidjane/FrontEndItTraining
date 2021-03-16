import { Component, OnInit, Output, EventEmitter, Input, Inject, Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MATERIAL_SANITY_CHECKS_FACTORY } from '@angular/material/core/common-behaviors/common-module';
import { Formation } from 'src/app/models/Formation';
import {MatDialogModule, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-formulaire-mise-ajour',
  templateUrl: './formulaire-mise-ajour.component.html',
  styleUrls: ['./formulaire-mise-ajour.component.css']
})
export class FormulaireMiseAjourComponent implements OnInit {
  formation: Formation;
   formationForm:FormGroup;
 
  
  constructor(private formBuilder:FormBuilder, 
    public dialogRef:MatDialogRef<FormulaireMiseAjourComponent>,
   @Inject(MatDialogModule) data) { 
    // this.description1 = data.description1;
    this.formationForm=this.formBuilder.group({
      titre:[''],
      description:[''],
      id:['']
    })

  }

  valider(){

         this.dialogRef.close(this.formationForm.value);
  }

onClose(){
  this.dialogRef.close();
}

  ngOnInit(): void {
    
  }

}
