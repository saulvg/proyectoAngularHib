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


  // 'datos' de tipo any contiene los datos que se pasaron al diálogo modal al abrirlo.
  constructor(
    public dialogRef: MatDialogRef<FormModalComponent>,
    private formBuilder: FormBuilder,
    private servicioPersonajes: ServicioPersonajesService,
    @Inject(MAT_DIALOG_DATA) public datos: any
  ) {
    // Almacena el personajeSeleccionado que se encuentra dentro del objeto datos. 
    // Si personajeSeleccionado no está definido, se asigna un objeto vacío {}.
    const personajeSeleccionado = datos?.personajeSeleccionado ?? {}; 

    // Creo el formulario reactivo
    this.formulario = this.formBuilder.group({
      id: [personajeSeleccionado.id ?? ''],
      nombre: [personajeSeleccionado.nombre ?? '', Validators.required],
      estado: [personajeSeleccionado.estado ?? '', Validators.required],
      especie: [personajeSeleccionado.especie ?? ''],
      img: [personajeSeleccionado.img ?? ''],
      tipo: [personajeSeleccionado.tipo ?? ''],
      genero: [personajeSeleccionado.genero ?? '', Validators.required],
      origen: [personajeSeleccionado.origen ?? ''],
      descripcion: [personajeSeleccionado.descripcion ?? '']
    });
  }

  /** Cierra el formulario modal */
  cerrarModal() {
    this.dialogRef.close();
  }

  /** Guarda los cambios de edicion o de creacion */
  guardarCambios() {
    if (this.formulario.valid) {
      const datosFormulario = this.formulario.value;

      // Si hay un personaje seleccionado llama al servicio de editar
      if (this.datos.personajeSeleccionado) {
        this.servicioPersonajes.editarPersonaje(datosFormulario).subscribe(
          (res: any) => {
            console.log(res);
            this.dialogRef.close(datosFormulario);
          },
          (err: any) => {
            console.error("Error al actualizar el personaje", err); // Manejar el error en caso de fallo en la actualización
          }
        );
      
      // Si no hay un personaje creado llama al servicio crear
      } else {
        const nextId = this.getNextAvailableId(this.datos.personajes); // Otorga al nuevo personaje el siguiente id disponible
        datosFormulario.id = nextId; // Se le asigna ese id
        this.servicioPersonajes.crearPersonaje(datosFormulario).subscribe(
          (res: any) => {
            console.log("Nuevo personaje creado", res);
            this.dialogRef.close(datosFormulario);
          },
          (err: any) => {
            console.error("Error al crear el nuevo personaje", err); // Manejar el error en caso de fallo en la creación

          }
        );
      }
    }
  }

  /** Dado el array de personajes que recibe el formulario modal comprueba cual es el id mas alto y devuelve dicho id + 1 */
  getNextAvailableId(data: Personajes[]): number {
    const maxId = data.reduce((max: any, obj: any) => (obj.id > max ? obj.id : max), 0);
    return maxId + 1;
  }
}
