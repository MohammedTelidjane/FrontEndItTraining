import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as EventEmitter from 'events';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-recherche-session',
  templateUrl: './recherche-session.component.html',
  styleUrls: ['./recherche-session.component.css']
})
export class RechercheSessionComponent implements OnInit {

  @Output() sessionSend = new EventEmitter();
  @Input() sessions: Session[];
  
  rechercheSessionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sessionService: SessionService) {
    this.rechercheSessionForm = this.fb.group({
      id: [0],
      prixHt: [0],
      dateDebut: [''],
      dateFin: ['']
    });
   }

   onSearch(): void {
     this.sessionService.getById(this.rechercheSessionForm.value)
     .subscribe();
     this.sessionSend.emit(this.rechercheSessionForm.value);
     console.log(this.rechercheSessionForm.value);
   }

  ngOnInit(): void {
  }

}
