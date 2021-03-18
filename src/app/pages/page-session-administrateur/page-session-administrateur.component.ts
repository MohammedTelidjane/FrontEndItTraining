import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/services/session.service';
import { FormulaireMiseAJourSessionComponent } from '../formulaire-mise-a-jour-session/formulaire-mise-a-jour-session.component';

@Component({
  selector: 'app-page-session-administrateur',
  templateUrl: './page-session-administrateur.component.html',
  styleUrls: ['./page-session-administrateur.component.css']
})
export class PageSessionAdministrateurComponent implements OnInit {

  listSession: Session[];
  isUpdateOpen = false

  constructor(private sessionService: SessionService, public dialog:MatDialog) { }

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
    let dialogRef = this.dialog.open(FormulaireMiseAJourSessionComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => 
        this.sessionService.create(data).subscribe(console.log)
         //console.log("Dialog output:", data)
       
    ); 
  }

  ngOnInit(): void {
    this.sessionService.getAll()
    .subscribe(response => {
    this.listSession = response;
    console.log(response);
    })
  }

  // onUpdate(session: Session, valDateDebut: string, valDateFin: string, valPrix: number): void {
  //   console.log(session);
  //   session.dateDebut = valDateDebut;
  //   session.dateFin = valDateFin;
  //   session.prixHt = valPrix;
  //   this.sessionService.create(session).subscribe(console.log);
  // }

  onDelete(id: number) {
    this.sessionService.delete(id).subscribe();
    this.listSession = this.listSession.filter(uneSession => uneSession.id !== id);
  }

}
