import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/session';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  listSession: Session[] = [];

  constructor() { }

  ngOnInit(): void {
  }

    // searchSession = (session: any) => {
  //   this.listSession.push(session);
  // }

}
