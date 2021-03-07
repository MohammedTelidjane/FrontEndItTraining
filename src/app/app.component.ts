import { Component } from '@angular/core';
import { Participant } from './models/participant';
import { Session } from './models/session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndItTraining';
  listSession: Session[] = [];
  listPart: Participant[] = [];

  // searchSession = (session: any) => {
  //   this.listSession.push(session);
  // }

}
