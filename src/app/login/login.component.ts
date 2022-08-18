import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;
  cadastrando!: boolean;
  mensagemSucesso!: string;
  errors?: String[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(){
    this.router.navigate(['/home'])
  }

  preparaCadastrar(event: any){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
        .salvar(usuario)
        .subscribe( response =>{
          this.errors = [];
          this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login."
          this.cadastrando = false;
          this.username = "";
          this.password = "";
        }, errorResponse => {
          this.mensagemSucesso = "";
          this.errors = errorResponse.error.errors;
        })
  }
}
