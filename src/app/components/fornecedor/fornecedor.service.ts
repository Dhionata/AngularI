import { catchError, map } from 'rxjs/operators';
import { fornecedor } from './fornecedor.model';
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

  create(fornecedor: fornecedor): Observable<fornecedor> {
    return this.http.post<fornecedor>(this.baseUrl + "/Adicionar/teste", fornecedor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<fornecedor[]> {
    return this.http.get<fornecedor[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<fornecedor> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<fornecedor>(url)
  }

  update(fornecedor: fornecedor): Observable<fornecedor> {
    const url = `${this.baseUrl}/${fornecedor.id}`
    return this.http.put<fornecedor>(url, fornecedor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<fornecedor> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<fornecedor>(url).pipe(
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
