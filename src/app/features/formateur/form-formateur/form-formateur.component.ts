import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/models/Formateur';
import { FormateurHttpService } from 'src/app/services/formateur/formateur-http.service';

@Component({
  selector: 'app-form-formateur',
  templateUrl: './form-formateur.component.html',
  styleUrls: ['./form-formateur.component.css']
})
export class FormFormateurComponent implements OnInit {

  @Input() messageButton:string
  @Input() formateurAModifier:Formateur
  formateurFormulaire: FormGroup;

  constructor(

    private formaBuilder: FormBuilder,
    private formateurHttpService: FormateurHttpService,
    //private router: Router

  ) {
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

  ajouter(){
    console.log(this.formateurAModifier)
    this.formateurHttpService
        .save(this.formateurFormulaire.value)
        .subscribe(console.log)
    // this.router.navigate(['/chats'])
  }

  remplirInputsFormateurAModifier(formateurAModifier:Formateur){
    this.formateurFormulaire = this.formaBuilder.group({
      nom: [formateurAModifier.nom],
      prenom: [formateurAModifier.prenom],
      dateNaissance: [formateurAModifier.dateNaissance],
      entreprise: [formateurAModifier.entreprise],
      telephone: [formateurAModifier.telephone],
      email: [formateurAModifier.email]
    })
  }
}
