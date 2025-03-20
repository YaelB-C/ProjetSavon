import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
/*import { RecettesComponent } from './pages/recettes/recettes.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AProposComponent } from './pages/apropos/apropos.component';
import { AjouterIngredientComponent } from './pages/ingredient-create/ingredient-create.component';
import { RecettesCreateComponent } from './pages/recettes-create/recettes-create.component';*/

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'confidentialite', component: PrivacyPolicyComponent },
  { path: 'ingredients', component: IngredientsComponent},
  /*{ path: 'recettes', component: RecettesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'Apropos', component: AProposComponent},
  { path: 'Créer', component: AjouterIngredientComponent},
  { path: 'Createrecette',component: RecettesCreateComponent}*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
