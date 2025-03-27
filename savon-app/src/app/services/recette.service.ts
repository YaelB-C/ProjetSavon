import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recette } from '../models/Recette';
import { Observable } from 'rxjs';
import { RecetteDTO } from '../models/RecetteDTO';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  apiURL="http://localhost:8080/api-savon/v1"
  constructor(private http:HttpClient) { }
  
  getAllRecettes(): Observable<Recette[]> {
    return this.http.get<Recette[]>(this.apiURL);
  }

  getRecetteById(id: number): Observable<Recette> {
    return this.http.get<Recette>(`${this.apiURL}/${id}`);
  }

  postRecetteDTO(recette: RecetteDTO): Observable<Recette> {
    return this.http.post<Recette>(this.apiURL, recette);
  }

  putRecetteDTO(id: number, recette: RecetteDTO): Observable<Recette> {
    return this.http.put<Recette>(`${this.apiURL}/${id}`, recette);
  }

  deleteRecette(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
