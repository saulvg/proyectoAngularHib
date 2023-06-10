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
  @Input() personajes: Personajes[] = [];

  constructor(
    public dialogRef: MatDialogRef<FormModalComponent>,
    private formBuilder: FormBuilder,
    private servicioPersonajes: ServicioPersonajesService,
    @Inject(MAT_DIALOG_DATA) public datos: any
  ) {
    const selectedPersonaje = datos?.selectedPersonaje ?? {};
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

  cerrarModal() {
    this.dialogRef.close();
  }

  guardarCambios() {
    if (this.formulario.valid) {
      const datosFormulario = this.formulario.value;

      if (this.datos.selectedPersonaje) {
        this.servicioPersonajes.editarPersonaje(datosFormulario).subscribe(
          (res: any) => {
            console.log("Personaje actualizado", res);
            this.dialogRef.close(datosFormulario);
          },
          (err: any) => {
            console.error("Error al actualizar el personaje", err);
            // Manejar el error en caso de fallo en la actualización
          }
        );
      } else {
        const nextId = this.getNextAvailableId(this.datos.personajes);
        datosFormulario.id = nextId;
        this.servicioPersonajes.crearPersonaje(datosFormulario).subscribe(
          (res: any) => {
            console.log("Nuevo personaje creado", res);
            this.dialogRef.close(datosFormulario);
          },
          (err: any) => {
            console.error("Error al crear el nuevo personaje", err);
            // Manejar el error en caso de fallo en la creación
          }
        );
      }
    }
  }

  getNextAvailableId(data: Personajes[]): number {
    const maxId = data.reduce((max: any, obj: any) => (obj.id > max ? obj.id : max), 0);
    return maxId + 1;
  }
}
