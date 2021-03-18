import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { FormulaireMiseAjourComponent } from '../formulaire-mise-ajour/formulaire-mise-ajour.component';


@Component({
  selector: 'app-page-formation-administrateur',
  templateUrl: './page-formation-administrateur.component.html',
  styleUrls: ['./page-formation-administrateur.component.css']
})
export class PageFormationAdministrateurComponent implements OnInit {
    formations: Formation[]=[];
    isUpdateOpen = false
 
    constructor(private formationService: FormationService, public dialog:MatDialog) { }


    openDialog() {
       
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "20%";
        dialogConfig.height = "68%";
        dialogConfig.position = {
            // 'top': '0',
            'right': '400px'
        };
        
        this.isUpdateOpen = true;
        let dialogRef = this.dialog.open(FormulaireMiseAjourComponent,dialogConfig);
 
        dialogRef.afterClosed().subscribe(
            data => 
            this.formationService.save(data).subscribe(console.log)
             //console.log("Dialog output:", data)
           
        ); 
    }

    onEdit(){
        
    }

    SupprimerParId(id:number):void{
           
        this.formationService.delete(id).subscribe();     
    } 

    ngOnInit(): void {
        this.formationService.findAll().subscribe(res=>this.formations=res);
    }

}

