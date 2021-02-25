import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/app/models/Formateur';
import { FormateurHttpService } from 'src/app/services/formateur/formateur-http.service';

@Component({
  selector: 'app-liste-formateur',
  templateUrl: './liste-formateur.component.html',
  styleUrls: ['./liste-formateur.component.css']
})
export class ListeFormateurComponent implements OnInit {

  formateurs:Formateur[] = [
    { id:1,
      nom:"Dujardin",
      prenom:"Toto",
      dateNaissance:"12/01/1887",
      entreprise:"Cupgemini",
      telephone:"04786454XX",
      email:"tdujardin@gmail.com"},
    { id:2,
      nom:"Dupres",
      prenom:"Tutu",
      dateNaissance:"11/08/1999",
      entreprise:"Sogeto",
      telephone:"04711154XX",
      email:"tdupres@gmail.com"}
  ]

  constructor(private formateurHttpService:FormateurHttpService) { }

  ngOnInit(): void {
    // this.formateurHttpService.findAll().subscribe(res=>{
    //   this.formateurs = res
    // })
  }



}
