import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personajes } from '../../interfaces/personajes';
import { ServicioPersonajesService } from '../../servicios/servicio-personajes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormModalComponent } from './form-modal/form-modal.component';

@Component({
  selector: 'app-privada-personajes',
  templateUrl: './privada-personajes.component.html',
  styleUrls: ['./privada-personajes.component.css']
})
export class PrivadaPersonajesComponent {

  crear = "../../../../../assets/iconos/create.png";
  borrar = "../../../../../assets/iconos/blackhole.png";
  editar = "../../../../../assets/iconos/portal-gun.png";

  @Input() personajes: Personajes[] = []; //  
  selectedPersonaje: any;
  mostrarCrearForm: boolean = false;
  dialogRef!: MatDialogRef<any>;

  @Output() muestraDescripcion: EventEmitter<Personajes> = new EventEmitter<Personajes>();


  constructor(private formBuilder: FormBuilder, private servPersonajes: ServicioPersonajesService, private dialog: MatDialog) {}

  ngOnInit() {
    this.obtenerPersonajes();
  }

  obtenerPersonajes() {
    this.servPersonajes.getPersonajes().subscribe(
      (res: Personajes[]) => {
        this.personajes = res;
        console.log(res);
      }
    );
  }

  setSelectedPersonaje(personaje: Personajes) {
    this.selectedPersonaje = personaje;
    console.log("setSelectedPersonaje: " + this.selectedPersonaje);
  }

  borrarPersonaje(personaje: Personajes) {
    this.servPersonajes.eliminarPersonaje(personaje.id).subscribe(
      res => {
        console.log("Exito al borrar", res);
        this.obtenerPersonajes();
      },
      (err) => {
        console.error(err);
      }
    );
  }

  abrirModal(editar: boolean, personajes: Personajes[]) {
    console.log(personajes);
    if (editar) {
      this.dialogRef = this.dialog.open(FormModalComponent, {
        width: '600px',
        data: { selectedPersonaje: this.selectedPersonaje, personajes: this.personajes } // Corrección aquí
      });
    } else {
      this.dialogRef = this.dialog.open(FormModalComponent, {
        width: '600px',
        data: { personajes: this.personajes } // Corrección aquí
      });
    }
  
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado', result);
      if (result) {
        this.obtenerPersonajes();
      }
    });
  }
  


}
