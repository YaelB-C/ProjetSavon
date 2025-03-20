import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recette } from '../models/models/Recette';
import { Observable } from 'rxjs';
import { RecetteDTO } from '../models/RecetteDTO';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  apiURL="http://localhost:8080/api-savon/v1"
  constructor(private http:HttpClient) { }
  
  getAllRecettes(): Observable<RecetteDTO[]> {
    return this.http.get<RecetteDTO[]>(this.apiURL);
  }

  getRecetteById(id: number): Observable<RecetteDTO> {
    return this.http.get<RecetteDTO>(`${this.apiURL}/${id}`);
  }

  postRecetteDTO(recette: RecetteDTO): Observable<RecetteDTO> {
    return this.http.post<RecetteDTO>(this.apiURL, recette);
  }

  putRecetteDTO(id: number, recette: RecetteDTO): Observable<RecetteDTO> {
    return this.http.put<RecetteDTO>(`${this.apiURL}/${id}`, recette);
  }

  deleteRecette(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
