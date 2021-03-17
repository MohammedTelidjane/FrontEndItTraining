import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormationComponent } from './features/detail-formation/detail-formation.component';
import { CardFormationComponent } from './features/formation/card-formation/card-formation.component';
import { FormulaireFormationComponent } from './features/formation/formulaire-formation/formulaire-formation.component';
import { ListeFormationComponent } from './features/formation/liste-formation/liste-formation.component';
import { ListParticipantComponent } from './features/participant/list-participant/list-participant.component';
import { ListSessionComponent } from './features/session/list-session/list-session.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PageAdministrateurLoginComponent } from './pages/page-administrateur-login/page-administrateur-login.component';
import { PageFormationAdministrateurComponent } from './pages/page-formation-administrateur/page-formation-administrateur.component';
import { PageFormationUtilisateurComponent } from './pages/page-formation-utilisateur/page-formation-utilisateur.component';
import { PageFormulaireFormateurComponent } from './pages/page-formulaire-formateur/page-formulaire-formateur.component';
import { PageFormulaireFormationComponent } from './pages/page-formulaire-formation/page-formulaire-formation.component';
import { PageFormulaireModifFormateurComponent } from './pages/page-formulaire-modif-formateur/page-formulaire-modif-formateur.component';
import { PageFormulaireParticipantComponent } from './pages/page-formulaire-participant/page-formulaire-participant.component';
import { PageListeFormateurComponent } from './pages/page-liste-formateur/page-liste-formateur.component';
import { PageTableauDeBordComponent } from './pages/page-tableau-de-bord/page-tableau-de-bord.component';
import { QuiSommesNousComponent } from './pages/qui-sommes-nous/qui-sommes-nous.component';
import { FormulaireSessionComponent } from './features/session/formulaire-session/formulaire-session.component';
import { PageSessionAdministrateurComponent } from './pages/page-session-administrateur/page-session-administrateur.component';
import { FormulaireParticipantComponent } from './features/participant/formulaire-participant/formulaire-participant.component';
import { PageParticipantAdministrateurComponent } from './pages/page-participant-administrateur/page-participant-administrateur.component';
import { PageThemeAdministrateurComponent } from './pages/page-theme-administrateur/page-theme-administrateur.component';
import { FormulaireThemeComponent } from './features/theme/formulaire-theme/formulaire-theme.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:"", component: AccueilComponent},
  {path:"qui-sommes-nous", component: QuiSommesNousComponent},
  {path:"FormulaireFormateur", component:PageFormulaireFormateurComponent},
  {path:"ListeFormateur", component:PageListeFormateurComponent},
  {path:"FormulaireModificationFormateur", component:PageFormulaireModifFormateurComponent},
  // {path:'cardFormations',component:CardFormationComponent}
  {path:'pageFormationsAdministrateur',component:PageFormationAdministrateurComponent},
  {path:'PageSessionAdministrateur',component:PageSessionAdministrateurComponent},
  {path:'PageParticipantAdministrateur', component:PageParticipantAdministrateurComponent},
  {path:'pageformationutilisateur',component:PageFormationUtilisateurComponent},
  {path:'detailFormation' , component: DetailFormationComponent},
  {path:'pageAdministrateurLogin' , component: PageAdministrateurLoginComponent},
  {path:'pageTableauDeBord' , component: PageTableauDeBordComponent},
  {path:'formulaireParticipant', component: FormulaireParticipantComponent},
  {path:'listeParticipants' , component: ListParticipantComponent},
  {path: 'formulaireSession', component: FormulaireSessionComponent},
  {path:'listeSessions' , component: ListSessionComponent},
  {path:'pageFormulaireFormation' , component: PageFormulaireFormationComponent},
  {path:'FormationUtilisateur' , component: PageFormationUtilisateurComponent},
  {path:'pageFormulaireParticipant' , component: PageFormulaireParticipantComponent},
  {path:'pageFormulaireTheme', component: PageThemeAdministrateurComponent},
  {path:'formulaireTheme', component: FormulaireThemeComponent},
  
  {path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
