import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormulaireThemeComponent } from './features/theme/formulaire-theme/formulaire-theme.component';
import { ListeThemeComponent } from './features/theme/liste-theme/liste-theme.component';
import { CardThemeComponent } from './features/theme/card-theme/card-theme.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormulaireFormationComponent } from './features//formation/formulaire-formation/formulaire-formation.component';
import { ListeFormationComponent } from './features/formation/liste-formation/liste-formation.component';
import { CardFormationComponent } from './features/formation/card-formation/card-formation.component';
import { NavbarComponent } from './commons/nav/navbar/navbar.component';
// import {ChipsModule} from 'primeng/chips';
// import { EditorModule } from 'primeng/editor';
// import { ButtonModule } from 'primeng/button';
// import {InputSwitchModule} from 'primeng/inputswitch';
import { PageFormationUtilisateurComponent } from './pages/page-formation-utilisateur/page-formation-utilisateur.component';
import { PageFormationAdministrateurComponent } from './pages/page-formation-administrateur/page-formation-administrateur.component';
//import {EditorModule} from 'primeng/editor';
// import {SplitButtonModule} from 'primeng/splitbutton';
import { DetailFormationComponent } from './features/detail-formation/detail-formation.component';
import { CardSessionComponent } from './features/session/card-session/card-session.component';
import { ListSessionComponent } from './features/session/list-session/list-session.component';
import { FormulaireSessionComponent } from './features/session/formulaire-session/formulaire-session.component';
import { CardParticipantComponent } from './features/participant/card-participant/card-participant.component';
import { RechercheSessionComponent } from './features/session/recherche-session/recherche-session.component';
import { ListParticipantComponent } from './features/participant/list-participant/list-participant.component';
import { FormulaireParticipantComponent } from './features/participant/formulaire-participant/formulaire-participant.component';
import { HeaderComponent } from './commons/header/header.component';
import { SessionComponent } from './pages/session/session.component';
import { ParticipantComponent } from './pages/participant/participant.component';
import { PageAdministrateurLoginComponent } from './pages/page-administrateur-login/page-administrateur-login.component';



@NgModule({
  declarations: [
    AppComponent,
    FormulaireThemeComponent,
    ListeThemeComponent,
    CardThemeComponent,
    FormulaireFormationComponent,
    ListeFormationComponent,
    CardFormationComponent,
    NavbarComponent,
    PageFormationUtilisateurComponent,
    PageFormationAdministrateurComponent,
    DetailFormationComponent,
    CardSessionComponent,
    ListSessionComponent,
    FormulaireSessionComponent,
    CardParticipantComponent,
    RechercheSessionComponent,
    ListParticipantComponent,
    FormulaireParticipantComponent,
    HeaderComponent,
    SessionComponent,
    ParticipantComponent,
    PageAdministrateurLoginComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // ChipsModule,
    // EditorModule,
    // InputSwitchModule,
    // SplitButtonModule,
    // ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
