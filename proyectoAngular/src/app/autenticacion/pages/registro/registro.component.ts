import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ServcicioAutenticacionService } from '../../servicios/servcicio-autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  mostrarPassword: boolean = false;
  hasError: boolean = false;
  errorMessage: string = "";
  registroCorrecto: boolean = false;

  formularioRegistro: FormGroup = new FormGroup({});

  constructor(private srvAuth: ServcicioAutenticacionService, private formBuilder: FormBuilder, private router: Router) { };

  ngOnInit() {
    this.formularioRegistro = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(22), this.passwordValidator()]],
    });
  };

  regsitroUsuario(): void {

    if (this.formularioRegistro.valid) {
      const { email, password } = this.formularioRegistro.value;
      //Peticion al servicio
      this.srvAuth.registrarUsuaio(email, password).subscribe(
        res => {
          this.registroCorrecto = true;
          this.redirigirPagina();
          this.hasError = false; // Reiniciar el estado de error

        },
        err => {
          console.log('Error', err.error.message);
          this.errorMessage = err.error.message;
          this.hasError = true; // Mostrar el mensaje de error

        }
      );
    } else {
      console.log("Formulario Invalido");
    };
  };

  togglePasswordVisibility() {
    this.mostrarPassword = !this.mostrarPassword;
  };


  private redirigirPagina(): void {
    setTimeout(() => {
      this.registroCorrecto = false;
      this.router.navigate(['/autenticacion']);
    }, 2000);
  };

  //Validador para verificar si la contraseha tiene al menos dos numeros, dos letras mayusculas y dos letras minusculas
  private passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.value;

      const regex = /^(?=.*\d.*\d)(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])/;

      if (regex.test(password)) {
        // La contraseha cumple con los requisitos
        return null;
      } else {
        // La contraseha no cumple con los requisitos
        return { passwordInvalid: true };
      }
    };
  }

}
