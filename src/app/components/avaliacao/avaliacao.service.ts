import { catchError, map } from 'rxjs/operators';
import { avaliacao } from './avaliacao.model';
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

  create(avaliacao: avaliacao): Observable<avaliacao> {
    return this.http.post<avaliacao>(this.baseUrl + "/Adicionar/", avaliacao).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<avaliacao[]> {
    return this.http.get<avaliacao[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<avaliacao> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<avaliacao>(url)
  }

  update(avaliacao: avaliacao): Observable<avaliacao> {
    const url = `${this.baseUrl}/${avaliacao.id}`
    return this.http.put<avaliacao>(url, avaliacao).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<avaliacao> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<avaliacao>(url).pipe(
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
