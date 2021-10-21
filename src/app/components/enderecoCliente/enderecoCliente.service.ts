import { catchError, map } from 'rxjs/operators';
import { enderecoCliente } from './enderecoCliente.model';
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

  create(enderecoCliente: enderecoCliente): Observable<enderecoCliente> {
    return this.http.post<enderecoCliente>(this.baseUrl + "/Adicionar/", enderecoCliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<enderecoCliente[]> {
    return this.http.get<enderecoCliente[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<enderecoCliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<enderecoCliente>(url)
  }

  update(enderecoCliente: enderecoCliente): Observable<enderecoCliente> {
    const url = `${this.baseUrl}/${enderecoCliente.id}`
    return this.http.put<enderecoCliente>(url, enderecoCliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<enderecoCliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<enderecoCliente>(url).pipe(
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
