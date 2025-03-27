import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { Ingredient } from '../../models/Ingredient';

@Component({
  selector: 'app-ingredient-create',
  templateUrl: './ingredient-create.component.html',
  styleUrls: ['./ingredient-create.component.css']
})

export class AjouterIngredientComponent implements OnInit {
  ingredient: Ingredient = new Ingredient()

  constructor(private ingredientservice: IngredientService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.ingredientservice.addIngredient(this.ingredient).subscribe({
      next: (response: any) => {
        console.log('Ingrédient enregistré avec succès:', response);
        alert('Ingrédient enregistré avec succès !');
      },
      error: (error: any) => {
        console.error('Erreur lors de l\'enregistrement de l\'ingrédient:', error);
        alert('Erreur lors de l\'enregistrement de l\'ingrédient.');
      }
    });
  }
}