import { catchError, map } from 'rxjs/operators';
import { Fornecedor } from './fornecedor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  baseUrl = "http://localhost:8080/fornecedor"

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

  create(Fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.baseUrl + "/Adicionar/", Fornecedor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<Fornecedor> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Fornecedor>(url)
  }

  update(Fornecedor: Fornecedor): Observable<Fornecedor> {
    const url = `${this.baseUrl}/${Fornecedor.id}`
    return this.http.put<Fornecedor>(url, Fornecedor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<Fornecedor> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Fornecedor>(url).pipe(
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
