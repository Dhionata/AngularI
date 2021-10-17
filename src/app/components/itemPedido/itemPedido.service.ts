import { catchError, map } from 'rxjs/operators';
import { itemPedido } from './itemPedido.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemPedidoService {

  baseUrl = "http://localhost:8080/itemPedido"

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

  create(itemPedido: itemPedido): Observable<itemPedido> {
    return this.http.post<itemPedido>(this.baseUrl + "/Adicionar/teste", itemPedido).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<itemPedido[]> {
    return this.http.get<itemPedido[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<itemPedido> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<itemPedido>(url)
  }

  update(itemPedido: itemPedido): Observable<itemPedido> {
    const url = `${this.baseUrl}/${itemPedido.id}`
    return this.http.put<itemPedido>(url, itemPedido).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<itemPedido> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<itemPedido>(url).pipe(
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
