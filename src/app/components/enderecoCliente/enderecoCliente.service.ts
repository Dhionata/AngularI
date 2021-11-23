import { catchError, map } from 'rxjs/operators';
import { EnderecoCliente } from './enderecoCliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoClienteService {

  baseUrl = "http://localhost:8080/enderecoCliente"

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

  create(enderecoCliente: EnderecoCliente): Observable<EnderecoCliente> {
    const url = `${this.baseUrl}/Adicionar/`
    return this.http.post<EnderecoCliente>(url, enderecoCliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<EnderecoCliente[]> {
    return this.http.get<EnderecoCliente[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<EnderecoCliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<EnderecoCliente>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(enderecoCliente: EnderecoCliente): Observable<EnderecoCliente> {
    const url = `${this.baseUrl}/Atualizar/`
    return this.http.patch<EnderecoCliente>(url, enderecoCliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(enderecoCliente: EnderecoCliente): Observable<EnderecoCliente> {
    const url = `${this.baseUrl}/Remover/`
    return this.http.delete<EnderecoCliente>(url, { body: enderecoCliente }).pipe(
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
