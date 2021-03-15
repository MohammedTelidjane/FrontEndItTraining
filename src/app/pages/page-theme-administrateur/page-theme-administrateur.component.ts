import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/Theme';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-page-theme-administrateur',
  templateUrl: './page-theme-administrateur.component.html',
  styleUrls: ['./page-theme-administrateur.component.css']
})
export class PageThemeAdministrateurComponent implements OnInit {

  listTheme: Theme[];

  constructor(private  themeService: ThemeService) { }

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
