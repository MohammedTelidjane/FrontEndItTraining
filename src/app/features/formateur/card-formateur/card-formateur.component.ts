import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/models/Formateur';
import { FormateurHttpService } from 'src/app/services/formateur/formateur-http.service';

@Component({
  selector: 'app-card-formateur',
  templateUrl: './card-formateur.component.html',
  styleUrls: ['./card-formateur.component.css']
})
export class CardFormateurComponent implements OnInit {

  @Input() formateur:Formateur
  @Output() delete = new EventEmitter()
  

  constructor(private formateurHttpService:FormateurHttpService,
              private router: Router
              ) { }

  ngOnInit(): void {
  }

  supprimerFormateur(){
    this.delete.emit("")
  }

  MettreAJourFormateur(){
    this.router.navigate(['/FormulaireModificationFormateur'])

  }
}
