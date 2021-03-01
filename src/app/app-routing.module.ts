import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormationComponent } from './features/detail-formation/detail-formation.component';
import { CardFormationComponent } from './features/formation/card-formation/card-formation.component';
import { ListeFormationComponent } from './features/formation/liste-formation/liste-formation.component';
import { PageFormationAdministrateurComponent } from './pages/page-formation-administrateur/page-formation-administrateur.component';
import { PageFormationUtilisateurComponent } from './pages/page-formation-utilisateur/page-formation-utilisateur.component';

const routes: Routes = [
  // {path:'cardFormations',component:CardFormationComponent}
  {path:'pageFormationsAdministrateur',component:ListeFormationComponent},
  //{path:'listesFromationsUtilisateur', component:CardFormationComponent},
  {path:'pageformationutilisateur',component:CardFormationComponent},
  {path:'detailFormation' , component: DetailFormationComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
