import { catchError, map } from 'rxjs/operators';
import { Pedido } from './pedido.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  baseUrl = "http://localhost:8080/pedido"

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

  create(pedido: Pedido): Observable<Pedido> {
    const url = `${this.baseUrl}/Adicionar/`
    return this.http.post<Pedido>(url, pedido).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<Pedido> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Pedido>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(pedido: Pedido): Observable<Pedido> {
    const url = `${this.baseUrl}/Atualizar/`
    return this.http.patch<Pedido>(url, pedido).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(pedido: Pedido): Observable<Pedido> {
    const url = `${this.baseUrl}/Remover/`
    return this.http.delete<Pedido>(url, { body: pedido }).pipe(
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
