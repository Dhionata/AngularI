import { catchError, map } from 'rxjs/operators';
import { usuario } from './usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = "http://localhost:8080/usuario"

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

  create(usuario: usuario): Observable<usuario> {
    return this.http.post<usuario>(this.baseUrl + "/Adicionar/teste", usuario).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<usuario[]> {
    return this.http.get<usuario[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<usuario> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<usuario>(url)
  }

  update(usuario: usuario): Observable<usuario> {
    const url = `${this.baseUrl}/${usuario.id}`
    return this.http.put<usuario>(url, usuario).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<usuario> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<usuario>(url).pipe(
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
