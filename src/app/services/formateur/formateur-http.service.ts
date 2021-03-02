import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from 'src/app/models/Formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurHttpService {

  constructor(private httpFormateur:HttpClient) { }

  findAll(){
    return this.httpFormateur.get<Formateur[]>('http://localhost:8001/formateurs')
  }

  delete(id:number){
    return this.httpFormateur.delete(`http://localhost:8001/formateurs/${id}`);
  }

  save(formateur: Formateur){
    return this.httpFormateur.post<Formateur>('http://localhost:8001/formateurs', formateur);
  }
}
