import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }

  URL: string = "http://localhost:3000";

  getColaboradores(){
    return this.http.get(`${this.URL}/api/colaboradores/`);
  }
}
