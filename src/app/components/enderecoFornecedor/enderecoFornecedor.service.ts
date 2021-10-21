import { catchError, map } from 'rxjs/operators';
import { enderecoFornecedor } from './enderecoFornecedor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoFornecedorService {

  baseUrl = "http://localhost:8080/enderecoFornecedor"

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

  create(enderecoFornecedor: enderecoFornecedor): Observable<enderecoFornecedor> {
    return this.http.post<enderecoFornecedor>(this.baseUrl + "/Adicionar/", enderecoFornecedor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<enderecoFornecedor[]> {
    return this.http.get<enderecoFornecedor[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<enderecoFornecedor> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<enderecoFornecedor>(url)
  }

  update(enderecoFornecedor: enderecoFornecedor): Observable<enderecoFornecedor> {
    const url = `${this.baseUrl}/${enderecoFornecedor.id}`
    return this.http.put<enderecoFornecedor>(url, enderecoFornecedor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<enderecoFornecedor> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<enderecoFornecedor>(url).pipe(
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
