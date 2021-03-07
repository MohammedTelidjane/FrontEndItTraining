import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-page-formation-utilisateur',
  templateUrl: './page-formation-utilisateur.component.html',
  styleUrls: ['./page-formation-utilisateur.component.css']
})
export class PageFormationUtilisateurComponent implements OnInit {
  formations: Formation[]=[];

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.formationService.findAll().subscribe(res=>this.formations=res);
  }

}
