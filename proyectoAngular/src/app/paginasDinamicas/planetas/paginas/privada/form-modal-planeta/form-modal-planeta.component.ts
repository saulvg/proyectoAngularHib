import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Planetas } from '../../../interfaces/planetas';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServicioPlanetasService } from '../../../servicios/servicio-planetas.service';

@Component({
  selector: 'app-form-modal-planeta',
  templateUrl: './form-modal-planeta.component.html',
  styleUrls: ['./form-modal-planeta.component.css']
})
export class FormModalPlanetaComponent {

  formulario: FormGroup;
  @Input() planetas: Planetas[] = [];
  
  constructor( public dialogRef: MatDialogRef<FormModalPlanetaComponent>, private formBuilder: FormBuilder, private servicioPlanetas: ServicioPlanetasService, @Inject(MAT_DIALOG_DATA) public datos: any){
    const planetaSeleccionado = datos?.planetaSeleccionado ?? {};
    this.formulario = this.formBuilder.group({
      id: [planetaSeleccionado.id ?? ''],
      nombre: [planetaSeleccionado.nombre ?? '', Validators.required],
      dimension: [planetaSeleccionado.dimension ?? '', Validators.required],
      descripcion: [planetaSeleccionado.descripcion ?? '', Validators.required],
      img: [planetaSeleccionado.img ?? '']
    });
  }

  cerrarModal() {
    this.dialogRef.close();
  }

  guardarCambios(){
  
    if(this.formulario.valid){
      
      const datosFormulario = this.formulario.value;
console.log("entro", datosFormulario);
      if(this.datos.planetaSeleccionado){
        this.servicioPlanetas.editarPlaneta(datosFormulario).subscribe(
          (res: any) => {
            console.log("Personaje actualizado", res);
            this.dialogRef.close(datosFormulario);
          },
          (err: any) => {
            console.log("Error al actualizar el personaje", err);
          }
        );
      } else {
        const nextId = this.getNextAvailableId(this.datos.planetas);
        datosFormulario.id = nextId;
        this.servicioPlanetas.crearPlaneta(datosFormulario).subscribe(
          (res: any) => {
            console.log("Nuevo personaje creado", res);
            this.dialogRef.close(datosFormulario);
          },
          (err: any) => {
            console.error("Error al crear el nuevo personaje", err);
          }
        );
      }
    }
  }

  getNextAvailableId(data: Planetas[]): number {
    const maxId = data.reduce((max: any, obj: any) => (obj.id > max ? obj.id : max), 0);
    return maxId + 1;
  }
}
