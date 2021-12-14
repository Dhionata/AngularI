import { catchError, map } from 'rxjs/operators';
import { Endereco } from './endereco.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  baseUrl = "http://localhost:8080/endereco"

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

  create(Endereco: Endereco): Observable<Endereco> {
    const url = `${this.baseUrl}`
    return this.http.post<Endereco>(url, Endereco).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<Endereco> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Endereco>(url)
  }

  update(Endereco: Endereco): Observable<Endereco> {
    const url = `${this.baseUrl}`
    return this.http.patch<Endereco>(url, Endereco).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(endereco: Endereco): Observable<Endereco> {
    const url = `${this.baseUrl}`
    return this.http.delete<Endereco>(url, { body: endereco }).pipe(
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
