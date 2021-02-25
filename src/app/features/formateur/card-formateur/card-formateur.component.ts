import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
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

  constructor(private formateurHttpService:FormateurHttpService) { }

  ngOnInit(): void {
  }

  deleteFormateur():void {
    //this.delete.emit()
    console.log("Bravo")
  }
}
