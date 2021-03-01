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
import {ChipsModule} from 'primeng/chips';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import {InputSwitchModule} from 'primeng/inputswitch';
import { PageFormationUtilisateurComponent } from './pages/page-formation-utilisateur/page-formation-utilisateur.component';
import { PageFormationAdministrateurComponent } from './pages/page-formation-administrateur/page-formation-administrateur.component';
//import {EditorModule} from 'primeng/editor';
import {SplitButtonModule} from 'primeng/splitbutton';
import { DetailFormationComponent } from './features/detail-formation/detail-formation.component';








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
   
    

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChipsModule,
    EditorModule,
    InputSwitchModule,
    SplitButtonModule,
    ButtonModule
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
