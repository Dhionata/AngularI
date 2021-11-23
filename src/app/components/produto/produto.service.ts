import { catchError, map } from 'rxjs/operators';
import { Produto } from './produto.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = "http://localhost:8080/produto"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  ShowOMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  create(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/Adicionar/`
    return this.http.post<Produto>(url, produto).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  //params para definir os parâmetros do get()
  findById(id: string): Observable<Produto> {
    const url = `${this.baseUrl}/BuscarById/${id}`
    return this.http.get<Produto>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/Atualizar/`
    return this.http.patch<Produto>(url, produto).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  //body para passar o objeto
  delete(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/Remover/`
    return this.http.delete<Produto>(url, { body: produto }).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.ShowOMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}
