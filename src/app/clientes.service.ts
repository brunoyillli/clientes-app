import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) { }

  getCliente() : Cliente{
    let cliente : Cliente = new Cliente();
    cliente.nome = "Fulano de tal";
    cliente.cpf = "888888888";
    return cliente;
  }
}
