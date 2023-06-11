import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personajes } from '../../interfaces/personajes';
import { ServicioPersonajesService } from '../../servicios/servicio-personajes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormModalComponent } from './form-modal/form-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privada-personajes',
  templateUrl: './privada-personajes.component.html',
  styleUrls: ['./privada-personajes.component.css']
})
export class PrivadaPersonajesComponent {

  // Rutas de los iconos que solo aparecen en la parte privada
  crear = "../../../../../assets/iconos/create.png";
  borrar = "../../../../../assets/iconos/blackhole.png";
  editar = "../../../../../assets/iconos/portal-gun.png";

  @Input() personajes: Personajes[] = [];

  personajeSeleccionado: any; // Guardara el personaje que se va a pasar al formulario modal de edicion
  dialogRef!: MatDialogRef<any>; // ! indica que la variable puede ser null

  constructor(private formBuilder: FormBuilder, private servPersonajes: ServicioPersonajesService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.obtenerPersonajes();
  }

  obtenerPersonajes() {
    this.servPersonajes.getPersonajes().subscribe(
      (res: Personajes[]) => {
        this.personajes = res;
        console.log(res);
      },
      (err) => {
        console.log("Soy error", err);
        this.router.navigate(['/not-found']);

      }
    );
  }

  /** El personaje que recibe como parametro sera el personaje seleccionado */
  setPersonajeSeleccionado(personaje: Personajes) {
    this.personajeSeleccionado = personaje;
  }

  /**Borra el personaje seleccionado, con la funcion confirm pregunta primero */
  borrarPersonaje(personaje: Personajes) {
    const confirmacion = confirm('¿Estás seguro de que quieres borrar el personaje?');

    if (confirmacion) {
      this.servPersonajes.eliminarPersonaje(personaje.id).subscribe(
        res => {
          console.log("Éxito al borrar", res);
          this.obtenerPersonajes();
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }


  /** Abre el formulario modal, recibe un booleano, (verdadero si se abre como edicion, falso si se abre para crear),
   * recibe como segundo parametro el array de los personajes
   */
  abrirModal(editar: boolean, personajes: Personajes[]) {
    if (editar) {
      // Abre el mat-dialog con un ancho de 600px y le pasa los datos del personaje seleccionado y el array de personajes
      this.dialogRef = this.dialog.open(FormModalComponent, {
        width: '600px',
        data: { personajeSeleccionado: this.personajeSeleccionado, personajes: this.personajes }
      });
    } else {
      // Al crearlos solo le paso los datos del array de personajes
      this.dialogRef = this.dialog.open(FormModalComponent, {
        width: '600px',
        data: { personajes: this.personajes }
      });
    }

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.obtenerPersonajes(); // Obtiene los personajes tras cerrar el formulario modal
      }
    });
  }



}
