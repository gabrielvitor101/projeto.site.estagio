import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Cat {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TesteService {
  constructor(private http: HttpClient) {}

  getAllCats() {
    console.log('funcionou');
    return this.http.get('http://localhost:8000/api/cats');
  }

  
}