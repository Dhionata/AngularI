import { catchError, map } from 'rxjs/operators';
import { ItemPedido } from './itemPedido.model';
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

  create(itemPedido: ItemPedido): Observable<ItemPedido> {
    const url = `${this.baseUrl}/Adicionar/`
    return this.http.post<ItemPedido>(url, itemPedido).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<ItemPedido[]> {
    return this.http.get<ItemPedido[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<ItemPedido> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<ItemPedido>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(itemPedido: ItemPedido): Observable<ItemPedido> {
    const url = `${this.baseUrl}/Atualizar/`
    return this.http.patch<ItemPedido>(url, itemPedido).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(itemPedido: ItemPedido): Observable<ItemPedido> {
    const url = `${this.baseUrl}/Remover/`
    return this.http.delete<ItemPedido>(url,{body: itemPedido}).pipe(
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
