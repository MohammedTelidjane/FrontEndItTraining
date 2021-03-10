import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Participant } from 'src/app/models/participant';

@Component({
  selector: 'app-card-participant',
  templateUrl: './card-participant.component.html',
  styleUrls: ['./card-participant.component.css']
})
export class CardParticipantComponent implements OnInit {

  @Input() part: Participant;
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete.emit();
  }

}
