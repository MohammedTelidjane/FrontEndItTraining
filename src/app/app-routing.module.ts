import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormationComponent } from './features/detail-formation/detail-formation.component';
import { CardFormationComponent } from './features/formation/card-formation/card-formation.component';
import { ListeFormationComponent } from './features/formation/liste-formation/liste-formation.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PageAdministrateurLoginComponent } from './pages/page-administrateur-login/page-administrateur-login.component';
import { PageFormationAdministrateurComponent } from './pages/page-formation-administrateur/page-formation-administrateur.component';
import { PageFormationUtilisateurComponent } from './pages/page-formation-utilisateur/page-formation-utilisateur.component';
import { PageFormulaireFormateurComponent } from './pages/page-formulaire-formateur/page-formulaire-formateur.component';
import { PageFormulaireModifFormateurComponent } from './pages/page-formulaire-modif-formateur/page-formulaire-modif-formateur.component';
import { PageListeFormateurComponent } from './pages/page-liste-formateur/page-liste-formateur.component';
import { QuiSommesNousComponent } from './pages/qui-sommes-nous/qui-sommes-nous.component';

const routes: Routes = [
  {path:"", component: AccueilComponent},
  {path:"qui-sommes-nous", component: QuiSommesNousComponent},
  {path:"FormulaireFormateur", component:PageFormulaireFormateurComponent},
  {path:"ListeFormateur", component:PageListeFormateurComponent},
  {path:"FormulaireModificationFormateur", component:PageFormulaireModifFormateurComponent},
  // {path:'cardFormations',component:CardFormationComponent}
  {path:'pageFormationsAdministrateur',component:PageFormationAdministrateurComponent},
  //{path:'listesFromationsUtilisateur', component:CardFormationComponent},
  {path:'pageformationutilisateur',component:PageFormationUtilisateurComponent},
  {path:'detailFormation' , component: DetailFormationComponent},
  {path:'pageAdministrateurLogin' , component: PageAdministrateurLoginComponent},
  {path:'FormationUtilisateur' , component: PageFormationUtilisateurComponent},
  
  {path: '**', component: AccueilComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
