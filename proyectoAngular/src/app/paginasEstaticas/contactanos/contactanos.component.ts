import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) { }

  formulario = this.formBuilder.group({
    nombre: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    consulta: ['', Validators.required],
    genero: ['', Validators.required]
  });

  enviarForm() {
    if (this.formulario.valid){
      console.log("Datos del formulario ", this.formulario.value);
      this.snackBar.open('El formulario es correcto', 'Cerrar', { duration: 3000 });
    } else {
      console.log("FORMULARIO INVALIDO :(");
    }
  }
}
