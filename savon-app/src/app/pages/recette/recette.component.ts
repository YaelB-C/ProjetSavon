import { Component, OnInit } from '@angular/core';
import { Recette } from '../../models/Recette';
import { RecetteService } from '../../services/recette.service';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
  recettes: Recette[] = []; // Liste des recettes
  isLoading: boolean = true; // Indicateur de chargement
  errorMessage: string = ""; // Message d'erreur
  indiceINSMoyen: number = 0; // Stocke l'INS moyen
  ingredientsTrie: { nom: string, occurences: number }[] = []; // Liste des ingrédients triés

  constructor(private recetteService: RecetteService) {}

  ngOnInit(): void {
    this.fetchRecettes(); // Récupère les recettes au chargement du composant
  }

  /**
   * Récupère la liste des recettes depuis l'API
   */
  fetchRecettes(): void {
    this.recetteService.getAllRecettes().subscribe({
      next: (data: Recette[]) => {
        this.recettes = data;
        this.isLoading = false;
        this.indiceINSMoyen = this.getIndiceINSMoyen(); // Calcul INS après chargement
        this.calculerOccurrencesIngredients(); // Calcul des ingrédients les plus utilisés
      },
      error: (error: Error) => {
        this.errorMessage = "Erreur lors du chargement des recettes.";
        console.error("Erreur API:", error);
        this.isLoading = false;
      }
    });
  }

  /**
   * Calcule l'indice INS moyen de toutes les recettes
   * @returns La moyenne de l'indice INS
   */
  getIndiceINSMoyen(): number {
    if (!this.recettes || this.recettes.length === 0) return 0;

    let totalINS = 0;
    let nombreRecettes = this.recettes.length;

    for (let recette of this.recettes) {
      if (recette.resultats && recette.resultats.length > 1) { // Vérifie que l'index 1 existe
        totalINS += recette.resultats[1].score; // Supposons que l'INS est stocké à l'index 1
      }
    }

    return totalINS / nombreRecettes;
  }

  /**
   * Calcule les occurrences des ingrédients dans les recettes et les trie par fréquence d'utilisation
   */
  calculerOccurrencesIngredients(): void {
    const occurrences: { [key: string]: number } = {};

    this.recettes.forEach(recette => {
      recette.ligneIngredients.forEach(ligne => {
        const nomIngredient = ligne.ingredient?.nom;
        if (nomIngredient) {
          occurrences[nomIngredient] = (occurrences[nomIngredient] || 0) + 1;
        }
      });
    });

    this.ingredientsTrie = Object.keys(occurrences)
      .map(nom => ({ nom, occurences: occurrences[nom] }))
      .sort((a, b) => b.occurences - a.occurences);
  }

  /**
   * Supprime une recette
   * @param id - L'ID de la recette à supprimer
   */
  deleteRecette(id: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette recette ?")) {
      this.recetteService.deleteRecette(id).subscribe({
        next: () => {
          console.log("Recette supprimée avec succès.");
          this.fetchRecettes(); // Rafraîchit la liste des recettes après suppression
        },
        error: (error: Error) => {
          console.error("Erreur lors de la suppression de la recette:", error);
        }
      });
    }
  }

  /**
   * Supprime toutes les recettes
   */
  supprimerToutesLesRecettes(): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer toutes les recettes ?")) {
      this.recetteService.deleteAllRecette().subscribe({
        next: () => {
          console.log("Toutes les recettes ont été supprimées avec succès.");
          this.recettes = []; // Vide la liste des recettes après la suppression
          this.ingredientsTrie = []; // Vide également la liste des ingrédients
        },
        error: (error: Error) => {
          console.error("Erreur lors de la suppression des recettes:", error);
        }
      });
    }
  }
}
