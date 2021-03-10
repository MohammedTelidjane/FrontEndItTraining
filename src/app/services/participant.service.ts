import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Participant[]> {
        return this.httpClient.get<Participant[]>(`http://localhost:8001/participants`);
      }
  
  getById(id: number) : Observable<Participant> {
      return this.httpClient.get<Participant>(`http://localhost:8001/participants/${id}`)
      }
  
  create(participant:Participant): Observable<Participant> {
       return this.httpClient.post<Participant>(`http://localhost:8001/participants`,participant);
       }
  
  //     update(articipant:Participant): Observable<Participant> {
  //           return this.httpClient.put<Participant>(`http://localhost:8001/participants`,participant);
  //         }
        
  delete(id:number) {
        return this.httpClient.delete(`http://localhost:8001/participants/id/${id}`)
        }

}
