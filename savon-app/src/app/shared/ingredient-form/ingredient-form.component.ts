import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ingredient } from '../../models/Ingredient';
import { DEFAULT_INGREDIENT } from '../constants/ingredient.constants';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css'],
})
export class IngredientFormComponent {
  ingredientForm: FormGroup;
  
  @Input() ingredient: Ingredient = { ...DEFAULT_INGREDIENT };
  @Input() isEditing: boolean = false;
  @Output() save = new EventEmitter<Ingredient>();
  @Output() cancelEdit = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.ingredientForm = this.fb.group({
      sapo: [this.ingredient.sapo, Validators.required],
      ins: [this.ingredient.ins, Validators.required],
      iode: [this.ingredient.iode, Validators.required],
      lavant: [this.ingredient.lavant, Validators.required],
      douceur: [this.ingredient.douceur, Validators.required],
      durete: [this.ingredient.durete, Validators.required],
      solubilite: [this.ingredient.solubilite, Validators.required],
      sechage: [this.ingredient.sechage, Validators.required],
      volMousse: [this.ingredient.volMousse, Validators.required],
      tenueMousse: [this.ingredient.tenueMousse, Validators.required],
    });
  }

  saveIngredient(): void {
    if (this.ingredientForm.valid) {
      this.save.emit(this.ingredientForm.value);
    } else {
      console.log("Le formulaire n'est pas valide.");
    }
  }

  cancel(): void {
    this.cancelEdit.emit();
  }
}
