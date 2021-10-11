import { catchError, map } from 'rxjs/operators';
import { TelefoneCliente } from './TelefoneCliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelefoneClienteService {

  baseUrl = "http://localhost:8080/TelefoneCliente"

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

  create(TelefoneCliente: TelefoneCliente): Observable<TelefoneCliente> {
    return this.http.post<TelefoneCliente>(this.baseUrl + "/Adicionar/", TelefoneCliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<TelefoneCliente[]> {
    return this.http.get<TelefoneCliente[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<TelefoneCliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<TelefoneCliente>(url)
  }

  update(TelefoneCliente: TelefoneCliente): Observable<TelefoneCliente> {
    const url = `${this.baseUrl}/${TelefoneCliente.id}`
    return this.http.put<TelefoneCliente>(url, TelefoneCliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<TelefoneCliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<TelefoneCliente>(url).pipe(
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
