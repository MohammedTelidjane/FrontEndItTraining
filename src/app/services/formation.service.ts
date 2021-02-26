import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/Formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpClient:HttpClient) { }

  findAll() {
    console.log("verifier findall2");
    return this.httpClient.get<Formation[]>("http://localhost:8001/formations")
  }

  finById(id:number) {
    return this.httpClient.get<Formation>("http://localhost:8001/formations/${id}") 
  }

  save(formation:Formation) {
    return this.httpClient.post<Formation>("http://localhost:8001/formations", formation)
 }

 update(formation:Formation) {

   return this.httpClient.put<Formation>("http://localhost:8001/formations", formation)

}

 delete(id:number) {
 console.log("verifier supprimer 2");
    return this.httpClient.delete(`http://localhost:8001/formations/${id}`);

 } 
}
