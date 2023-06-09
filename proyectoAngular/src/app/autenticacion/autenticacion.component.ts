import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServcicioAutenticacionService } from './servicios/servcicio-autenticacion.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent {
  mostrarPassword: boolean = false;
  hasError: boolean = false;
  errorMessage: string = ""
  loginCorrecto: boolean = false;

  formularioLogin: FormGroup = new FormGroup({})

  constructor(private srvAuth: ServcicioAutenticacionService, private formBuilder: FormBuilder, private router: Router) { }



  ngOnInit() {
    this.formularioLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  iniciarSesion() {
    if (this.formularioLogin.valid) {
      const { email, password } = this.formularioLogin.value
      this.srvAuth.enviarCredenciales(email, password).subscribe(
        res => {
          console.log("Datos del formulario ", res);
          //this.snackBar.open('El formulario es correcto', 'Cerrar', { duration: 3000 });
          this.loginCorrecto = true
          this.redireccion()
          this.hasError = false; // Reiniciar el estado de error
          //this.router.navigate(['/'])

        },
        err => {
          console.log('Error', err.error.message);
          this.errorMessage = err.error.message
          this.hasError = true; // Mostrar el mensaje de error

        }
      )
      //this.snackBar.open('El formulario es correcto', 'Cerrar', { duration: 3000 });
    } else {
      console.log("FORMULARIO INVALIDO :(");
    }
  }

  togglePasswordVisibility() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  redireccion() {
    setTimeout(() => {
      this.router.navigate(['/'])
      this.loginCorrecto = false
    }, 2000)
  }


}
