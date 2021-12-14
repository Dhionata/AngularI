import { catchError, map } from 'rxjs/operators';
import { Avaliacao } from './avaliacao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  baseUrl = "http://localhost:8080/avaliacao"

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

  create(avaliacao: Avaliacao): Observable<Avaliacao> {
    const url = `${this.baseUrl}`
    return this.http.post<Avaliacao>(url, avaliacao).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Avaliacao[]> {
    return this.http.get<Avaliacao[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<Avaliacao> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Avaliacao>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(avaliacao: Avaliacao): Observable<Avaliacao> {
    const url = `${this.baseUrl}`
    return this.http.patch<Avaliacao>(url, avaliacao).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(avaliacao: Avaliacao): Observable<Avaliacao> {
    const url = `${this.baseUrl}`
    return this.http.delete<Avaliacao>(url, { body: avaliacao }).pipe(
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
