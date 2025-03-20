import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recette } from '../models/models/Recette';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  apiURL="http://localhost:8080/api-savon/v1"
  constructor(private http:HttpClient) { }
  getAllRecette(): Observable<Recette[]> {
    return this.http.get<Recette[]>(`${this.apiURL}/recette`);
  }

}
