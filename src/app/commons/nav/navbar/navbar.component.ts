import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() formations: Formation[]=[];


  constructor(private formationService:FormationService,  private router:Router) {

    
   }


   afficherFormationsCoteUtilisateurs(): void{
     
    this.formationService.findAll().subscribe(res=>this.formations=res);
    console.log(this.formations);
    this.router.navigate(['/listesFromationsUtilisateur']);
   }

  ngOnInit(): void {
  }

}
