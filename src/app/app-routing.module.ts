import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormationComponent } from './features/detail-formation/detail-formation.component';
import { CardFormationComponent } from './features/formation/card-formation/card-formation.component';
import { FormulaireFormationComponent } from './features/formation/formulaire-formation/formulaire-formation.component';
import { ListeFormationComponent } from './features/formation/liste-formation/liste-formation.component';
import { ListParticipantComponent } from './features/participant/list-participant/list-participant.component';
import { ListSessionComponent } from './features/session/list-session/list-session.component';
import { PageAdministrateurLoginComponent } from './pages/page-administrateur-login/page-administrateur-login.component';
import { PageFormationAdministrateurComponent } from './pages/page-formation-administrateur/page-formation-administrateur.component';
import { PageFormationUtilisateurComponent } from './pages/page-formation-utilisateur/page-formation-utilisateur.component';
import { PageFormulaireFormateurComponent } from './pages/page-formulaire-formateur/page-formulaire-formateur.component';
import { PageFormulaireFormationComponent } from './pages/page-formulaire-formation/page-formulaire-formation.component';
import { PageFormulaireModifFormateurComponent } from './pages/page-formulaire-modif-formateur/page-formulaire-modif-formateur.component';
import { PageListeFormateurComponent } from './pages/page-liste-formateur/page-liste-formateur.component';
import { PageTableauDeBordComponent } from './pages/page-tableau-de-bord/page-tableau-de-bord.component';

const routes: Routes = [
  {path:"FormulaireFormateur", component:PageFormulaireFormateurComponent},
  {path:"ListeFormateur", component:PageListeFormateurComponent},
  {path:"FormulaireModificationFormateur", component:PageFormulaireModifFormateurComponent},
  // {path:'cardFormations',component:CardFormationComponent}
  {path:'pageFormationsAdministrateur',component:PageFormationAdministrateurComponent},
  //{path:'listesFromationsUtilisateur', component:CardFormationComponent},
  {path:'pageformationutilisateur',component:PageFormationUtilisateurComponent},
  {path:'detailFormation' , component: DetailFormationComponent},
  {path:'pageAdministrateurLogin' , component: PageAdministrateurLoginComponent},
  {path:'pageTableauDeBord' , component: PageTableauDeBordComponent},
  {path:'listeParticipants' , component: ListParticipantComponent},
  {path:'listeSessions' , component: ListSessionComponent},
  {path:'pageFormulaireFormation' , component: PageFormulaireFormationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
