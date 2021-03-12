import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-administrateur-login',
  templateUrl: './page-administrateur-login.component.html',
  styleUrls: ['./page-administrateur-login.component.css']
})
export class PageAdministrateurLoginComponent implements OnInit {
 messageErreur :string="";
 hide = true;
 hideDescription =true;
  constructor(private router:Router) { }

  // seConnecter(motDePasse:string,description:string):void{
  //   console.log(motDePasse);
  //   console.log(description);

  // }

  connexion(Identifiant:string,motDePasse:string){
    if (Identifiant=="root" && motDePasse=="root"){
      // console.log("root");
        this.router.navigate(['/pageTableauDeBord']);
      
    } else {
     this.messageErreur="Identifiant ou Mot de passe erroné"};

  }
  ngOnInit(): void {
  }

}
