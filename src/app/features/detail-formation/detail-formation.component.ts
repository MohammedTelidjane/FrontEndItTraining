import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.css']
})
export class DetailFormationComponent implements OnInit {

  constructor(private router:Router) { }
  DirigerVersFormulaireParticipant():void{
this.router.navigate(['/pageFormulaireParticipant']);
  }
  ngOnInit(): void {
  }

}
