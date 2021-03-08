import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FomulaireFormationComponent } from './features/formation/fomulaire-formation/fomulaire-formation.component';
import { CardFormationComponent } from './features/formation/card-formation/card-formation.component';
import { ListeFormationComponent } from './features/formation/liste-formation/liste-formation.component';
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


@NgModule({
  declarations: [
    AppComponent,
    FomulaireFormationComponent,
    CardFormationComponent,
    ListeFormationComponent,
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
    ContactsServicesComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
