import { catchError, map } from 'rxjs/operators';
import { TelefoneFornecedor } from './telefoneFornecedor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelefoneFornecedorService {

  baseUrl = "http://localhost:8080/telefoneFornecedor"

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

  create(TelefoneFornecedor: TelefoneFornecedor): Observable<TelefoneFornecedor> {
    const url = `${this.baseUrl}/Adicionar/`
    return this.http.post<TelefoneFornecedor>(url, TelefoneFornecedor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<TelefoneFornecedor[]> {
    return this.http.get<TelefoneFornecedor[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<TelefoneFornecedor> {
    const url = `${this.baseUrl}/BuscarById/${id}`
    return this.http.get<TelefoneFornecedor>(url)
  }

  update(TelefoneFornecedor: TelefoneFornecedor): Observable<TelefoneFornecedor> {
    const url = `${this.baseUrl}/Atualizar/`
    return this.http.patch<TelefoneFornecedor>(url, TelefoneFornecedor).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(telefoneFornecedor: TelefoneFornecedor): Observable<TelefoneFornecedor> {
    const url = `${this.baseUrl}/Remover/`
    return this.http.delete<TelefoneFornecedor>(url, { body: telefoneFornecedor }).pipe(
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
