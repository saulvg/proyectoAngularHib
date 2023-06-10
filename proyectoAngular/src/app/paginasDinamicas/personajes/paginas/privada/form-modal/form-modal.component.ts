import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioPersonajesService } from '../../../servicios/servicio-personajes.service';
import { Personajes } from '../../../interfaces/personajes';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent {
  formulario: FormGroup;
  @Input() personajes: Personajes[] = []; //  

  constructor(
    public dialogRef: MatDialogRef<FormModalComponent>,
    private formBuilder: FormBuilder,
    private servicioPersonajes: ServicioPersonajesService,
    @Inject(MAT_DIALOG_DATA) public datos: any
  ) {
    const selectedPersonaje = datos?.selectedPersonaje ?? {}; // Verificar si datos.selectedPersonaje es null o undefined
    this.formulario = this.formBuilder.group({
      id: [selectedPersonaje.id ?? ''],
      nombre: [selectedPersonaje.nombre ?? '', Validators.required],
      estado: [selectedPersonaje.estado ?? '', Validators.required],
      especie: [selectedPersonaje.especie ?? ''],
      img: [selectedPersonaje.img ?? ''],
      tipo: [selectedPersonaje.tipo ?? ''],
      genero: [selectedPersonaje.genero ?? '', Validators.required],
      origen: [selectedPersonaje.origen ?? ''],
      descripcion: [selectedPersonaje.descripcion ?? '']
    });
  }

  ngOnInit() {
    console.log("Personajes oninit " + this.personajes)
  }

  cerrarModal() {
    this.dialogRef.close();
  }

  guardarCambios() {

    if (this.formulario.valid) {

      const datosFormulario = this.formulario.value;

      if (this.datos.selectedPersonaje) {
        // Si existen los datos, significa que se está editando una card existente
        // Procesa los datos del formulario para actualizar la card existente
        this.servicioPersonajes.editarPersonaje(datosFormulario).subscribe(
          (res: any) => {
            console.log("Card actualizada", res);
            this.dialogRef.close(datosFormulario); // Pasar los datos actualizados de vuelta al componente principal
          },
          (err: any) => {
            console.error("Error al actualizar la card", err);
            // Manejar el error en caso de fallo en la actualización
          }
        );
      } else {
        // Si no existen los datos, significa que se está creando una nueva card
        // Procesa los datos del formulario para crear una nueva card
        this.servicioPersonajes.crearPersonaje(datosFormulario).subscribe(
          (res: any) => {
            console.log("Nueva card creada", res);
            this.dialogRef.close(datosFormulario); // Pasar los datos actualizados de vuelta al componente principal
          },
          (err: any) => {
            console.error("Error al crear la nueva card", err);
            // Manejar el error en caso de fallo en la creación
          }
        );
      }
    }
  }
}
