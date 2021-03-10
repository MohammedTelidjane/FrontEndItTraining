import { Component, Input, OnInit } from '@angular/core';
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

  onDelete(session: Session) {
    this.sessionService.delete(session.id).subscribe();
    this.listSession = this.listSession.filter(uneSession => uneSession.id !== session.id);
  }

}
