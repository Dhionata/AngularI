import { catchError, map } from 'rxjs/operators';
import { ProdutoFornecedor } from './produtoFornecedor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoFornecedorService {

  baseUrl = "http://localhost:8080/ProdutoFornecedor"

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

  create(produtoFornecedor: ProdutoFornecedor): Observable<ProdutoFornecedor> {
    const url = `${this.baseUrl}/Adicionar/`
    return this.http.post<ProdutoFornecedor>(url, produtoFornecedor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<ProdutoFornecedor[]> {
    return this.http.get<ProdutoFornecedor[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<ProdutoFornecedor> {
    const url = `${this.baseUrl}/BuscarById/${id}`
    return this.http.get<ProdutoFornecedor>(url)
  }

  update(produtoFornecedor: ProdutoFornecedor): Observable<ProdutoFornecedor> {
    const url = `${this.baseUrl}/Atualizar/`
    return this.http.patch<ProdutoFornecedor>(url, produtoFornecedor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(produtoFornecedor: ProdutoFornecedor): Observable<ProdutoFornecedor> {
    const url = `${this.baseUrl}/Remover/`
    return this.http.delete<ProdutoFornecedor>(url, { body: produtoFornecedor }).pipe(
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
