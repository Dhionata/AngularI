import { catchError, map } from 'rxjs/operators';
import { TipoUsuario } from './TipoUsuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {

  baseUrl = "http://localhost:8080/TipoUsuario"

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

  create(TipoUsuario: TipoUsuario): Observable<TipoUsuario> {
    const url = `${this.baseUrl}/Adicionar/`
    return this.http.post<TipoUsuario>(url, TipoUsuario).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<TipoUsuario[]> {
    return this.http.get<TipoUsuario[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<TipoUsuario> {
    const url = `${this.baseUrl}/BuscarById/${id}`
    return this.http.get<TipoUsuario>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(TipoUsuario: TipoUsuario): Observable<TipoUsuario> {
    const url = `${this.baseUrl}/Atualizar`
    return this.http.patch<TipoUsuario>(url, { body: TipoUsuario }).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(TipoUsuario: TipoUsuario): Observable<TipoUsuario> {
    const url = `${this.baseUrl}/Remover/`
    return this.http.delete<TipoUsuario>(url, { body: TipoUsuario }).pipe(
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
