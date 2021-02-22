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


@NgModule({
  declarations: [
    AppComponent,
    FomulaireFormationComponent,
    CardFormationComponent,
    ListeFormationComponent,
    FormulaireThemeComponent,
    ListeThemeComponent,
    CardThemeComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
