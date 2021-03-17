import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Participant } from 'src/app/models/participant';
import { ParticipantService } from 'src/app/services/participant.service';
import { FormulaireMiseAJourParticipantComponent } from '../formulaire-mise-a-jour-participant/formulaire-mise-a-jour-participant.component';
import { FormulaireMiseAjourComponent } from '../formulaire-mise-ajour/formulaire-mise-ajour.component';

@Component({
  selector: 'app-page-participant-administrateur',
  templateUrl: './page-participant-administrateur.component.html',
  styleUrls: ['./page-participant-administrateur.component.css']
})
export class PageParticipantAdministrateurComponent implements OnInit {

  listParticipant: Participant[];
  isUpdateOpen = false

  constructor(private participantService: ParticipantService, public dialog:MatDialog) { }

  openDialog() {
       
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "20%";
    dialogConfig.height = "68%";
    dialogConfig.position = {
        // 'top': '0',
        'right': '500px'
    };
    
    this.isUpdateOpen = true;
    let dialogRef = this.dialog.open(FormulaireMiseAJourParticipantComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => 
        this.participantService.create(data).subscribe(console.log)
         //console.log("Dialog output:", data)
       
    ); 
}

onEdit(){
        
}

  ngOnInit(): void {
    this.participantService.getAll()
    .subscribe(response => {
    this.listParticipant = response;
    console.log(response);
    })
  }

  // onUpdate(participant: Participant, valNom: string, valPrenom: string, valDateNaissance: string): void {
  //   console.log(participant);
  //   participant.nom = valNom;
  //   participant.prenom = valPrenom;
  //   participant.dateNaissance = valDateNaissance;
  //   this.participantService.create(participant).subscribe(console.log);
  // }

  onDelete(id: number) {
    this.participantService.delete(id).subscribe();
    this.listParticipant = this.listParticipant.filter(unParticipant => unParticipant.id !== id);
  }

}
