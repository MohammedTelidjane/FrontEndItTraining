import { Component, OnInit } from '@angular/core';
import { reseau } from 'src/app/models/Reseau';

@Component({
  selector: 'app-reseaux-sociaux',
  templateUrl: './reseaux-sociaux.component.html',
  styleUrls: ['./reseaux-sociaux.component.css']
})
export class ReseauxSociauxComponent implements OnInit {

  listeReseauxSociaux:reseau[] = [
    {nom:"Twitter", 
      lienImage: "https://th.bing.com/th/id/OIP.1nFvGnrJ53FAqIefnNCAWwHaHa?w=221&h=220&c=7&o=5&pid=1.7", 
      lienHyperTexte:"https://twitter.com/?lang=fr"},
    {nom:"Facebook", 
      lienImage: "https://th.bing.com/th/id/OIP.67erQrAo-zy3lbAatv9iHQHaHa?w=186&h=186&c=7&o=5&pid=1.7",
      lienHyperTexte:"https://fr-fr.facebook.com/"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
