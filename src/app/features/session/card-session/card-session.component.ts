import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Session } from 'src/app/models/session';

@Component({
  selector: 'app-card-session',
  templateUrl: './card-session.component.html',
  styleUrls: ['./card-session.component.css']
})
export class CardSessionComponent implements OnInit {

  @Input() sess: Session;
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();
  
  sessionForm:FormGroup;

  constructor(private sesionBuider: FormBuilder) {
    this.sessionForm=this.sesionBuider.group({
      prixHt: [0],
      dateDebut: [''],
    dateFin: ['']
    });
   }

  ngOnInit(): void {
  }

  onUpdate() {
    this.update.emit();
  }

  onDelete() {
    this.delete.emit();
  }

}
