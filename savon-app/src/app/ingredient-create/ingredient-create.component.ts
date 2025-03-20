import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';
import { Ingredient } from '../models/models/Ingredient';

@Component({
  selector: 'app-ingredient-create',
  templateUrl: './ingredient-create.component.html',
  styleUrls: ['./ingredient-create.component.css']
})

export class IngredientCreateComponent implements OnInit {
  ingredient: Ingredient = new Ingredient 

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void{}

  onSubmit(): void {
    this.ingredientService.postIngredient(this.ingredient).subscribe({
      next: (response: any) => {
        console.log('Ingrédient enregistré:', response);
        // Redirection ou réinitialisation du formulaire
      },
      error: (error:Error) => console.error('Erreur:', error)
    });
  }
}