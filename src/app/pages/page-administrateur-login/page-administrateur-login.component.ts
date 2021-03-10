import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-administrateur-login',
  templateUrl: './page-administrateur-login.component.html',
  styleUrls: ['./page-administrateur-login.component.css']
})
export class PageAdministrateurLoginComponent implements OnInit {
 messageErreur :string="";
  constructor(private router:Router) { }

  connexion(Identifiant:string,motDePasse:string){
    if (Identifiant=="root" && motDePasse=="root"){
      console.log("root");
     
        this.router.navigate(['/pageFormationsAdministrateur']);
      
    } else {
     this.messageErreur="Identifiant ou Mot de passe erroné"};

  }
  ngOnInit(): void {
  }

}
