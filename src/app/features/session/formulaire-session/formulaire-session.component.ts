import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-formulaire-session',
  templateUrl: './formulaire-session.component.html',
  styleUrls: ['./formulaire-session.component.css']
})
export class FormulaireSessionComponent implements OnInit {

  @Output() sessionToSend = new EventEmitter();
  @Input() sessions: Session[];
  sessionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sessionService : SessionService) {
    this.sessionForm = this.formBuilder.group({
      prixHt: [0],
      dateDebut: [''],
    dateFin: ['']
    });
   }

  onSubmit(): void {
    this.sessionService.create(this.sessionForm.value)
    .subscribe();
    console.log(this.sessionForm.value);
    this.sessionToSend.emit(this.sessionForm.value);
  }

  ngOnInit(): void {
  }

}
