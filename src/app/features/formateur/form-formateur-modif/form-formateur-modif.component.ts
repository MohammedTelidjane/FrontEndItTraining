import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formateur } from 'src/app/models/Formateur';
import { FormateurHttpService } from 'src/app/services/formateur/formateur-http.service';

@Component({
  selector: 'app-form-formateur-modif',
  templateUrl: './form-formateur-modif.component.html',
  styleUrls: ['./form-formateur-modif.component.css']
})
export class FormFormateurModifComponent implements OnInit {

  @Input() messageButton:string;
  @Input() formateurAModifier:Formateur;
  formateurFormulaire: FormGroup;

  constructor(private formaBuilder: FormBuilder,
              private formateurHttpService: FormateurHttpService) {

    this.formateurFormulaire = this.formaBuilder.group({
      nom: [''],
      prenom: [''],
      dateNaissance: [''],
      entreprise: [''],
      telephone: [''],
      email: ['']
    })
  }

  ngOnInit(): void {
    
  }

  update(){
    // console.log(this.formateurAModifier)
    // this.formateurHttpService
    //     .save(this.formateurFormulaire.value)
        // .subscribe(console.log)
    // this.router.navigate(['/chats'])
  }

}

