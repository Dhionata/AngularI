import { catchError, map } from 'rxjs/operators';
import { Telefone } from './telefone.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  baseUrl = "http://localhost:8080/telefone"

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

  create(Telefone: Telefone): Observable<Telefone> {
    return this.http.post<Telefone>(this.baseUrl + "/Adicionar/", Telefone).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Telefone[]> {
    return this.http.get<Telefone[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<Telefone> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Telefone>(url)
  }

  update(Telefone: Telefone): Observable<Telefone> {
    const url = `${this.baseUrl}/${Telefone.id}`
    return this.http.put<Telefone>(url, Telefone).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<Telefone> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Telefone>(url).pipe(
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
