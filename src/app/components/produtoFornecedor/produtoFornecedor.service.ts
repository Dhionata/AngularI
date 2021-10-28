import { catchError, map } from 'rxjs/operators';
import { produtoFornecedor } from './produtoFornecedor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class produtoFornecedorService {

  baseUrl = "http://localhost:8080/produtoFornecedor"

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

  create(produtoFornecedor: produtoFornecedor): Observable<produtoFornecedor> {
    return this.http.post<produtoFornecedor>(this.baseUrl + "/Adicionar/", produtoFornecedor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<produtoFornecedor[]> {
    return this.http.get<produtoFornecedor[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<produtoFornecedor> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<produtoFornecedor>(url)
  }

  update(produtoFornecedor: produtoFornecedor): Observable<produtoFornecedor> {
    const url = `${this.baseUrl}/${produtoFornecedor.id}`
    return this.http.patch<produtoFornecedor>(url, produtoFornecedor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<produtoFornecedor> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<produtoFornecedor>(url).pipe(
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
