import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/app/models/Formateur';
import { FormateurHttpService } from 'src/app/services/formateur/formateur-http.service';

@Component({
  selector: 'app-liste-formateur',
  templateUrl: './liste-formateur.component.html',
  styleUrls: ['./liste-formateur.component.css']
})
export class ListeFormateurComponent implements OnInit {

  formateurs:Formateur[] = []

  constructor(private formateurHttpService:FormateurHttpService) { }

  ngOnInit(): void {
    this.formateurHttpService.findAll().subscribe(res=>{
      this.formateurs = res
    })
  }

  // supprimeFormateur(formateur:Formateur){
  //   // this.formateurHttpService.delete(formateur.id).subscribe;
  //   this.formateurs = this.formateurs.filter(unFormateur => unFormateur.id !== formateur.id)
  // }

  deleteFormateur():void {
    //this.delete.emit()
    console.log("Bravo")
  }

}
