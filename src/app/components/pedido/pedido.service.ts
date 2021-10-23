import { catchError, map } from 'rxjs/operators';
import { pedido } from './pedido.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class pedidoService {

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

  create(pedido: pedido): Observable<pedido> {
    return this.http.post<pedido>(this.baseUrl + "/Adicionar/", pedido).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<pedido[]> {
    return this.http.get<pedido[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  findById(id: string): Observable<pedido> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<pedido>(url)
  }

  update(pedido: pedido): Observable<pedido> {
    const url = `${this.baseUrl}/${pedido.id}`
    return this.http.put<pedido>(url, pedido).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<pedido> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<pedido>(url).pipe(
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
