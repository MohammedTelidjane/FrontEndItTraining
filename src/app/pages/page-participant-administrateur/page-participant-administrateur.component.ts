import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/models/participant';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-page-participant-administrateur',
  templateUrl: './page-participant-administrateur.component.html',
  styleUrls: ['./page-participant-administrateur.component.css']
})
export class PageParticipantAdministrateurComponent implements OnInit {

  listParticipant: Participant[];

  constructor(private participantServeice: ParticipantService) { }

  ngOnInit(): void {
    this.participantServeice.getAll()
    .subscribe(response => {
    this.listParticipant = response;
    console.log(response);
    })
  }

  onUpdate(participant: Participant, valNom: string, valPrenom: string, valDateNaissance: string): void {
    console.log(participant);
    participant.nom = valNom;
    participant.prenom = valPrenom;
    participant.dateNaissance = valDateNaissance;
    this.participantServeice.create(participant).subscribe(console.log);
  }

  onDelete(id: number) {
    this.participantServeice.delete(id).subscribe();
    this.listParticipant = this.listParticipant.filter(unParticipant => unParticipant.id !== id);
  }

}
