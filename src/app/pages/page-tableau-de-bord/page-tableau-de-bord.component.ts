import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-tableau-de-bord',
  templateUrl: './page-tableau-de-bord.component.html',
  styleUrls: ['./page-tableau-de-bord.component.css']
})
export class PageTableauDeBordComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit(): void {
  }

}
