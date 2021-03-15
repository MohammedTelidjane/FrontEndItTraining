import { Component, Input, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/Theme';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-liste-theme',
  templateUrl: './liste-theme.component.html',
  styleUrls: ['./liste-theme.component.css']
})
export class ListeThemeComponent implements OnInit {

  @Input() listTheme: Theme[];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getAll()
    .subscribe(response => {
      this.listTheme = response;
      console.log(response);
    })
  }

  onDelete(theme: Theme) {
    this.themeService.delete(theme.id).subscribe();
    this.listTheme = this.listTheme.filter(UnTheme => UnTheme.id !== theme.id);
  }

}
