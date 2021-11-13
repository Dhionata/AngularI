import { catchError, map } from 'rxjs/operators';
import { Usuario } from './usuario.model';
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

  create(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/Adicionar/`
    return this.http.post<Usuario>(url, usuario).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<Usuario> {
    const url = `${this.baseUrl}/BuscarById/`
    return this.http.get<Usuario>(url, { params: { "id": id } }).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)))
  }

  update(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/Atualizar`
    return this.http.patch<Usuario>(url, usuario).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/Remover/`
    return this.http.delete<Usuario>(url, { body: usuario }).pipe(
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
