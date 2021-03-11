import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.css']
})
export class ListSessionComponent implements OnInit {

  @Input() listSession: Session[];
  

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.getAll()
    .subscribe(response => {
    this.listSession = response;
    console.log(response);
    })
  }

  onUpdate(session: Session, valDateDebut: string, valDateFin: string, valPrix): void {
    console.log(session);
    session.dateDebut = valDateDebut;
    session.dateFin = valDateFin;
    session.prixHt = valPrix;
    this.sessionService.create(session).subscribe(console.log);
  }

  onDelete(session: Session) {
    this.sessionService.delete(session.id).subscribe();
    this.listSession = this.listSession.filter(uneSession => uneSession.id !== session.id);
  }

}
