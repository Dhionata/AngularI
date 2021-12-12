import { catchError, map } from 'rxjs/operators';
import { Cliente } from './cliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:8080/cliente"

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

  create(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/Adicionar/`
    return this.http.post<Cliente>(url, cliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/BuscarById/${id}`
    return this.http.get<Cliente>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/Atualizar/`
    return this.http.patch<Cliente>(url, cliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/Remover/`
    return this.http.delete<Cliente>(url, { body: cliente }).pipe(
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
