import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuarios } from './interfaces/usuarios';
import { ServcicioAutenticacionService } from './servicios/servcicio-autenticacion.service';
/*
@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})*/
@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent {
  hide = true;
/*
  correo: string;
  contrasenya: string;
  
  public usuarios: Usuarios[] = [];*/

  constructor (/*private srvUsuarios: ServcicioAutenticacionService*/private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    /*this.correo = "";
    this.contrasenya = "";*/
   }

  formulario = this.formBuilder.group({
    correo: ['', [Validators.required, Validators.email]],
    contrasenya: ['', Validators.required],
  });

  iniciarSesion(){
    if(this.formulario.valid){
      console.log("Datos del formulario ", this.formulario.value);
      this.snackBar.open('El formulario es correcto', 'Cerrar', { duration: 3000});
    } else {
      console.log("FORMULARIO INVALIDO :(");
    }
  }

  /*obtenerUsuario(){
    this.srvUsuarios.getCuentas().subscribe(
      (res: Usuarios[]) => {
        this.usuarios = res;
      }
    );

    if(res.correo === this.correo){

    }
  };*/
/*
  login(){
    const usuario = { correo: this.correo, contrasenya: this.contrasenya};
    this.srvUsuarios.getCuentas(usuario).subscribe((data) => {
      console.log("Sesión iniciada");
    });

  }*/
/*
  ngOnInit(){
    //this.iniciarSesion();
    //this.obtenerUsuario();
    this.login();
  }*/
}
