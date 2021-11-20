import { catchError, map } from 'rxjs/operators';
import { EnderecoFornecedor } from './enderecoFornecedor.model';
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

  create(enderecoFornecedor: EnderecoFornecedor): Observable<EnderecoFornecedor> {
    const url = `${this.baseUrl}/Adicionar/`
    return this.http.post<EnderecoFornecedor>(url, enderecoFornecedor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<EnderecoFornecedor[]> {
    return this.http.get<EnderecoFornecedor[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<EnderecoFornecedor> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<EnderecoFornecedor>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(enderecoFornecedor: EnderecoFornecedor): Observable<EnderecoFornecedor> {
    const url = `${this.baseUrl}/Atualizar/`
    return this.http.patch<EnderecoFornecedor>(url, enderecoFornecedor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(enderecoFornecedor: EnderecoFornecedor): Observable<EnderecoFornecedor> {
    const url = `${this.baseUrl}/Remover/`
    return this.http.delete<EnderecoFornecedor>(url, { body: EnderecoFornecedor }).pipe(
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
