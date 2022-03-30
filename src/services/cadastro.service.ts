import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/models/produto.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Produto>("http://localhost:3001/produtos/1");
  }


}
