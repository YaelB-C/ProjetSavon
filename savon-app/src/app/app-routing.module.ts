import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { RecettesCreateComponent } from './pages/recette-create/recette-create.component';
import { RecetteComponent } from './pages/recette/recette.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'confidentialite', component: PrivacyPolicyComponent },
  { path: 'ingredients', component: IngredientsComponent},
  { path: 'Créer', component: IngredientsComponent},
  { path: 'Createrecette',component: RecettesCreateComponent},
  { path: 'Recette' ,component:RecetteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
