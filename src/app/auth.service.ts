import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './login/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURLBase + "/api/usuarios"

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario:Usuario) : Observable<any>{
    return this.http.post<any>(this.apiURL, usuario);
  }
}
