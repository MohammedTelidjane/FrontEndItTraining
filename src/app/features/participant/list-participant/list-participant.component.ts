import { Component, Input, OnInit } from '@angular/core';
import { Participant } from 'src/app/models/participant';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-list-participant',
  templateUrl: './list-participant.component.html',
  styleUrls: ['./list-participant.component.css']
})
export class ListParticipantComponent implements OnInit {

  // @Input() 
  listParticipant: Participant[];

  constructor(private participantService: ParticipantService) { }

  ngOnInit(): void {
    this.participantService.getAll()
    .subscribe(response => {
    this.listParticipant = response;
    console.log(response);
    })
  }

  onDelete(participant: Participant) {
    this.participantService.delete(participant.id).subscribe();
    this.listParticipant = this.listParticipant.filter(unParticipant => unParticipant.id !== participant.id);
  }

}
