import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormateurHttpService } from 'src/app/services/formateur/formateur-http.service';

@Component({
  selector: 'app-form-formateur',
  templateUrl: './form-formateur.component.html',
  styleUrls: ['./form-formateur.component.css']
})
export class FormFormateurComponent implements OnInit {

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
    this.formateurHttpService
        .save(this.formateurFormulaire.value)
        .subscribe(console.log)
    // this.router.navigate(['/chats'])
}
}
