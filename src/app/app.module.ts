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
    AssocierFormateurAFormationComponent
 
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
