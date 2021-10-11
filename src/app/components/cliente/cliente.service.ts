import { catchError, map } from 'rxjs/operators';
import { cliente } from './cliente.model';
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

  create(cliente: cliente): Observable<cliente> {
    return this.http.post<cliente>(this.baseUrl + "/Adicionar/teste", cliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<cliente[]> {
    return this.http.get<cliente[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<cliente>(url)
  }

  update(cliente: cliente): Observable<cliente> {
    const url = `${this.baseUrl}/${cliente.id}`
    return this.http.put<cliente>(url, cliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<cliente>(url).pipe(
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
