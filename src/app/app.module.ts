import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormulaireThemeComponent } from './features/theme/formulaire-theme/formulaire-theme.component';
import { ListeThemeComponent } from './features/theme/liste-theme/liste-theme.component';
import { CardThemeComponent } from './features/theme/card-theme/card-theme.component';
import { CardFormateurComponent } from './features/formateur/card-formateur/card-formateur.component';
import { ListeFormateurComponent } from './features/formateur/liste-formateur/liste-formateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import { FormFormateurComponent } from './features/formateur/form-formateur/form-formateur.component';
import { AssocierFormateurAFormationComponent } from './pages/associer-formateur-aformation/associer-formateur-aformation.component';
import { PageListeFormateurComponent } from './pages/page-liste-formateur/page-liste-formateur.component';
import { PageFormulaireFormateurComponent } from './pages/page-formulaire-formateur/page-formulaire-formateur.component';
import { PageFormulaireModifFormateurComponent } from './pages/page-formulaire-modif-formateur/page-formulaire-modif-formateur.component';
import { AfficheListeEtModifieFormateurComponent } from './features/formateur/affiche-liste-et-modifie-formateur/affiche-liste-et-modifie-formateur.component';
import { FooterComponent } from './commons/footers/footer/footer.component';
import { AccueilTempComponent } from './pages/accueil-temp/accueil-temp.component';
import { ReseauxSociauxComponent } from './commons/footers/reseaux-sociaux/reseaux-sociaux.component';
import { ReseauSocialComponent } from './commons/footers/reseau-social/reseau-social.component';
import { InfosDiversesComponent } from './commons/footers/infos-diverses/infos-diverses.component';
import { ContactsServicesComponent } from './commons/footers/contacts-services/contacts-services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
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
import { PageFormulaireParticipantComponent } from './pages/page-formulaire-participant/page-formulaire-participant.component';
// import { MatSliderModule} from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { AccueilComponent } from './pages/accueil/accueil.component';
import { MatSliderModule } from '@angular/material/slider';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { QuiSommesNousComponent } from './pages/qui-sommes-nous/qui-sommes-nous.component';



@NgModule({
  declarations: [
    AppComponent,
    FormulaireThemeComponent,
    ListeThemeComponent,
    CardThemeComponent,
    CardFormateurComponent,
    ListeFormateurComponent,
    FormFormateurComponent,
    AssocierFormateurAFormationComponent,
    PageListeFormateurComponent,
    PageFormulaireFormateurComponent,
    PageFormulaireModifFormateurComponent,
    AfficheListeEtModifieFormateurComponent,
    FooterComponent,
    AccueilTempComponent,
    ReseauxSociauxComponent,
    ReseauSocialComponent,
    InfosDiversesComponent,
    ContactsServicesComponent,
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
    PageAdministrateurLoginComponent,
    PageFormulaireParticipantComponent,
    AccueilComponent,
    QuiSommesNousComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    
    // MatSliderModule
    MatSliderModule,
    NgMatSearchBarModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
