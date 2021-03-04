import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFormulaireFormateurComponent } from './pages/page-formulaire-formateur/page-formulaire-formateur.component';
import { PageFormulaireModifFormateurComponent } from './pages/page-formulaire-modif-formateur/page-formulaire-modif-formateur.component';
import { PageListeFormateurComponent } from './pages/page-liste-formateur/page-liste-formateur.component';

const routes: Routes = [
  {path:"FormulaireFormateur", component:PageFormulaireFormateurComponent},
  {path:"ListeFormateur", component:PageListeFormateurComponent},
  {path:"FormulaireModificationFormateur", component:PageFormulaireModifFormateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
