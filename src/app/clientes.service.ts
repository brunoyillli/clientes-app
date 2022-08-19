import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor( private http: HttpClient ) { }

  salvar( cliente : Cliente ) : Observable<Cliente>{
    const token = JSON.parse(localStorage.getItem('access_token') || '{}')
    const headers = {
      'Authorization' : 'Bearer ' + token.access_token
    }
    return this.http.post<Cliente>(`${this.apiURL}`, cliente, {headers});
  }

  atualizar( cliente : Cliente ) : Observable<any>{
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  getClientes() : Observable<Cliente[]>{
    const token = JSON.parse(localStorage.getItem('access_token') || '{}')
    const headers = {
      'Authorization' : 'Bearer ' + token.access_token
    }
    return this.http.get<Cliente[]>(`${this.apiURL}`, {headers});
  }
 
  getClienteById(id:number) : Observable<Cliente>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(cliente: Cliente) : Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }
}
