import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { HttpClientModule } from '@angular/common/http';
import { RadarChartComponent } from './shared/radar-chart/radar-chart.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { RecetteComponent } from './pages/recette/recette.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { ModalIngredientPickerComponent } from './shared/modal-ingredient-picker/modal-ingredient-picker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecettesCreateComponent } from './pages/recette-create/recette-create.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    AproposComponent,
    IngredientsComponent,
    RadarChartComponent,
    RecetteComponent,
    ModalIngredientPickerComponent,
    RecettesCreateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
