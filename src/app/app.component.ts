import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from './models/Formation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndItTraining';
  // formations:Formation[]=[];
  values:string[]=[];
  text: string;
  checked: boolean = false;
  text1: string = 
  '<span style="color: red">red text</span>' + '<br>' +
  '<span style="text-decoration: line-through">crossed out text</span>' + '<br>' +
  '<span style="text-decoration: overline">overline text</span>' + '<br>' +
  '<span style="text-decoration: underline">underline text</span>';



  constructor(){}
  ajouterFormation(nouvelleFormation:Formation){

    // this.formations.push(nouvelleFormation);
    // console.log("composant_parent");
    // console.log(this.formations);
  
  }

  // afficherFormationsCoteUtilisateurs(){
  //  // this.router.navigate(['/cardFormations']);
    

  // }

}
