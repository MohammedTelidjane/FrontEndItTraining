import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardFormationComponent } from './features/formation/card-formation/card-formation.component';
import { ListeFormationComponent } from './features/formation/liste-formation/liste-formation.component';

const routes: Routes = [
  // {path:'cardFormations',component:CardFormationComponent}
  {path:'listeFormationsAdministrateur',component:ListeFormationComponent},
  {path:'listesFromationsUtilisateur', component:CardFormationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
