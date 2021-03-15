import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../models/session';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) {}

    
  getAll(): Observable<Session[]> {
        return this.httpClient.get<Session[]>(`http://localhost:8001/sessions`);
      }
  
  getById(id: number) : Observable<Session> {
      return this.httpClient.get<Session>(`http://localhost:8001/sessions/${id}`)
      }
  
  create(session:Session) {
       return this.httpClient.post<Session>(`http://localhost:8001/sessions`,session);
       }
  
  //     update(session:Session): Observable<Session> {
  //           return this.httpClient.put<Session>(`http://localhost:8001/session`,session);
  //         }
        
        delete(id:number) {
              return this.httpClient.delete(`http://localhost:8001/sessions/id/${id}`)
            }
      
    
   
}
