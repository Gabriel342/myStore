import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/models/produto.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  URL = "http://localhost:3001/produtos";

  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.URL);
  }

  buscarPorID(id: number): Observable<Produto> {
    return this.http.get<Produto>(this.URL + "/" + id);
  }

  incluir(produto: Produto): Observable<any> {
    return this.http.post<any>(this.URL, produto);
  }

  atualizar(idAtualizar: number, produtoAtualizar: Produto): Observable<any> {
    return this.http.put<any>(this.URL + "/" + idAtualizar, produtoAtualizar);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + "/" + id);
  }
}