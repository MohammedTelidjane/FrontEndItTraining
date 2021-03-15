import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from '../models/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Theme[]> {
        return this.httpClient.get<Theme[]>(`http://localhost:8001/themes`);
      }
  
  getById(id: number) : Observable<Theme> {
      return this.httpClient.get<Theme>(`http://localhost:8001/themes/${id}`)
      }
  
  create(theme:Theme) {
       return this.httpClient.post<Theme>(`http://localhost:8001/themes`,theme);
       }
        
  delete(id:number) {
      return this.httpClient.delete(`http://localhost:8001/themes/id/${id}`)
      }
}
