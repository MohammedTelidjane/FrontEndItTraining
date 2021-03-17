import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Theme } from 'src/app/models/Theme';
import { ThemeService } from 'src/app/services/theme.service';
import { FormulaireMiseAJourThemeComponent } from '../formulaire-mise-a-jour-theme/formulaire-mise-a-jour-theme.component';

@Component({
  selector: 'app-page-theme-administrateur',
  templateUrl: './page-theme-administrateur.component.html',
  styleUrls: ['./page-theme-administrateur.component.css']
})
export class PageThemeAdministrateurComponent implements OnInit {

  listTheme: Theme[];
  isUpdateOpen = false

  constructor(private themeService: ThemeService, public dialog:MatDialog) { }

  openDialog() {
       
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "20%";
    dialogConfig.height = "68%";
    dialogConfig.position = {
        // 'top': '0',
        'right': '600px'
    };
    this.isUpdateOpen = true;
    let dialogRef = this.dialog.open(FormulaireMiseAJourThemeComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => 
        this.themeService.create(data).subscribe(console.log)
         //console.log("Dialog output:", data)
       
    ); 
  }

  ngOnInit(): void {
    this.themeService.getAll()
    .subscribe(response => {
      this.listTheme = response;
      console.log(response);
    })
  }

  onUpdate(theme: Theme, valNom: string): void {
    console.log(theme);
    theme.nom = valNom;
    this.themeService.create(theme).subscribe(console.log);
  }

  onDelete(id: number) {
    this.themeService.delete(id).subscribe();
    this.listTheme = this.listTheme.filter(unTheme => unTheme.id !== id);
  }

}
