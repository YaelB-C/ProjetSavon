import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { HttpClientModule } from '@angular/common/http';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { IngredientCreateComponent } from './ingredient-create/ingredient-create.component';
import { FormsModule } from '@angular/forms';
import { IngredientListComponent } from './shared/ingredient-list/ingredient-list.component';
import { IngredientFormComponent } from './shared/ingredient-form/ingredient-form.component';
import { IngredientImportExportComponent } from './shared/ingredient-import-export/ingredient-import-export.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    IngredientsComponent,
    RadarChartComponent,
    IngredientCreateComponent
    FormsModule,
    IngredientListComponent,
    IngredientFormComponent,
    IngredientImportExportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
