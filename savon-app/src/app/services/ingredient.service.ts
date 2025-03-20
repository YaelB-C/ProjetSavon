import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingredient } from '../models/models/Ingredient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  postIngredient(ingredient: Ingredient) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8080/api-savon/v1';

    constructor(private http: HttpClient) {}

    /**
    * Récupère tous les ingrédients depuis l'API.
    * @returns Un Observable contenant la liste des ingrédients.
    */
    getAllIngredients(): Observable<Ingredient[]> {
        return this.http.get<Ingredient[]>(`${this.apiUrl}/ingredient`);
  }
  
}
