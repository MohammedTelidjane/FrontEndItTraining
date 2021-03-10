import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/models/participant';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  // listPart: Participant[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
