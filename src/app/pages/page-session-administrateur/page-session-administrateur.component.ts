import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-page-session-administrateur',
  templateUrl: './page-session-administrateur.component.html',
  styleUrls: ['./page-session-administrateur.component.css']
})
export class PageSessionAdministrateurComponent implements OnInit {

  listSession: Session[];

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.getAll()
    .subscribe(response => {
    this.listSession = response;
    console.log(response);
    })
  }

  onUpdate(session: Session, valDateDebut: string, valDateFin: string, valPrix: number): void {
    console.log(session);
    session.dateDebut = valDateDebut;
    session.dateFin = valDateFin;
    session.prixHt = valPrix;
    this.sessionService.create(session).subscribe(console.log);
  }

  onDelete(id: number) {
    this.sessionService.delete(id).subscribe();
    this.listSession = this.listSession.filter(uneSession => uneSession.id !== id);
  }

}
