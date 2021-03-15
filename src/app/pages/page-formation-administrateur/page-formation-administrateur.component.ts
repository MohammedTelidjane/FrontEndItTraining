import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-page-formation-administrateur',
  templateUrl: './page-formation-administrateur.component.html',
  styleUrls: ['./page-formation-administrateur.component.css']
})
export class PageFormationAdministrateurComponent implements OnInit {
  formations: Formation[]=[];
  text1: string = 
  '<span style="color: red">red text</span>' + '<br>' +
  '<span style="text-decoration: line-through">crossed out text</span>' + '<br>' +
  '<span style="text-decoration: overline">overline text</span>' + '<br>' +
  '<span style="text-decoration: underline">underline text</span>';

 
  constructor(private formationService: FormationService, public dialog:MatDialog) { }


//    openDialog() {
//      const dialogRef = this.dialog.open(PageFormationAdministrateurComponent);

// //     dialogRef.afterClosed().subscribe(result => {
// //       console.log(`Dialog result: ${result}`);
// //     });
// //   }
//  }


  recupererToutesFormations() :void {
    console.log("verifier findall1");
    this.formationService.findAll().subscribe(res=>this.formations=res);
    console.log("verifier findall3");
    console.log(this.formations);
   // this.router.navigate(['/listeFormationsAdministrateur']);
 }
 SupprimerParId(id:number):void{
  //  console.log("verifier delete pageadmin1");
  this.formationService.delete(id).subscribe();
  // console.log("verifier delete pageadmin2");

} 

MettreAJourUneFormation(formation:Formation,valTitre:string,valDescription:string):void{
 // console.log("avant les inputs");
 // console.log(formation.id);
 // console.log(formation.titre);
 // console.log(formation.description);
// let inputValDescription = (<HTMLInputElement>document.getElementById("myInputEditor")).value;
// let inputValTitre = (<HTMLInputElement>document.getElementById("myInputChampText")).value;
console.log(formation);
//  formation.description=inputValDescription;
//  formation.titre=inputValTitre;
formation.titre=valTitre;
formation.description=valDescription;
 //console.log("avant dappler save");
//  console.log(formation.description);
//  console.log(formation.titre);
 this.formationService.save(formation).subscribe(console.log);
 //console.log("apresdappler save");

}


  ngOnInit(): void {
    this.formationService.findAll().subscribe(res=>this.formations=res);
  }

}
