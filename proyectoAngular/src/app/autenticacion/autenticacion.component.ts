import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ServcicioAutenticacionService } from './servicios/servcicio-autenticacion.service';
import { Router } from '@angular/router';


//Componente que para gestionar el login 
@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent {
  mostrarPassword: boolean = false;
  hasError: boolean = false;
  errorMessage: string = "";
  loginCorrecto: boolean = false;

  formularioLogin: FormGroup = new FormGroup({});

  constructor(private srvAuth: ServcicioAutenticacionService, private formBuilder: FormBuilder, private router: Router) { };

  ngOnInit() {
    this.formularioLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(22), this.passwordValidator()]],
    });
  };

  iniciarSesion(): void {

    if (this.formularioLogin.valid) {
      const { email, password } = this.formularioLogin.value;
      //Peticion al servicio
      this.srvAuth.enviarCredenciales(email, password).subscribe(
        res => {
          this.loginCorrecto = true;
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
      this.loginCorrecto = false;
      this.router.navigate(['/']);
    }, 2000);
    setTimeout(() => {
      window.location.reload();
    }, 2300);
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
