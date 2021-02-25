import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from 'src/app/models/Formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurHttpService {

  constructor(private httpFormateur:HttpClient) { }

  findAll(){
    return this.httpFormateur.get<Formateur[]>('http://localhost:3000/formateurs')
  }
}
