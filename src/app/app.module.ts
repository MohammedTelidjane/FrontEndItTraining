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
import { CardSessionComponent } from './features/session/card-session/card-session.component';
import { ListSessionComponent } from './features/session/list-session/list-session.component';
import { FormulaireSessionComponent } from './features/session/formulaire-session/formulaire-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardParticipantComponent } from './features/participant/card-participant/card-participant.component';
import { RechercheSessionComponent } from './features/session/recherche-session/recherche-session.component';
import { ListParticipantComponent } from './features/participant/list-participant/list-participant.component';
import { FormulaireParticipantComponent } from './features/participant/formulaire-participant/formulaire-participant.component';


@NgModule({
  declarations: [
    AppComponent,
    FomulaireFormationComponent,
    CardFormationComponent,
    ListeFormationComponent,
    FormulaireThemeComponent,
    ListeThemeComponent,
    CardThemeComponent,
    CardSessionComponent,
    ListSessionComponent,
    FormulaireSessionComponent,
    CardParticipantComponent,
    RechercheSessionComponent,
    ListParticipantComponent,
    FormulaireParticipantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
