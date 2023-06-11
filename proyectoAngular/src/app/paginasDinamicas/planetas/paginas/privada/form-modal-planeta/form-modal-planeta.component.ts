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
  
  //La variable 'datos' de tipo any contiene los datos que se pasaron al modal dialog al abrirlo
  constructor( public dialogRef: MatDialogRef<FormModalPlanetaComponent>, private formBuilder: FormBuilder, private servicioPlanetas: ServicioPlanetasService, @Inject(MAT_DIALOG_DATA) public datos: any){
    //Esta variable se encarga de almacenar el planeta seleccionado que se encuentra en la variable datos.
    //En caso de que el planeta seleccionado no esté definido, se le asigna un objeto vacío
    const planetaSeleccionado = datos?.planetaSeleccionado ?? {};

    //Se crea el formulario reactivo
    this.formulario = this.formBuilder.group({
      id: [planetaSeleccionado.id ?? ''],
      nombre: [planetaSeleccionado.nombre ?? '', Validators.required],
      dimension: [planetaSeleccionado.dimension ?? '', Validators.required],
      descripcion: [planetaSeleccionado.descripcion ?? '', Validators.required],
      img: [planetaSeleccionado.img ?? '']
    });
  }

  /**
   * Método que se encarga de cerrar el formulario modal
   */
  cerrarModal() {
    this.dialogRef.close();
  }

  /**
   * Método que se encarga de guardar los cambios relacionados con la edición o la creación 
   * de un planeta
   */
  guardarCambios(){
  
    if(this.formulario.valid){
      
      const datosFormulario = this.formulario.value;
      
      //Si se ha seleccionado un planeta, se llama al servicio de editar
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

      //Si no se ha seleccionado ningún planeta, se llama al servicio de crear
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

  /**
   * Método que se encarga de comprobar cuál es el id más alto existente y delvuelve
   * ese id + 1
   * @param data Un objeto de planetas
   * @returns el id más alto existente + 1
   */
  getNextAvailableId(data: Planetas[]): number {
    const maxId = data.reduce((max: any, obj: any) => (obj.id > max ? obj.id : max), 0);
    return maxId + 1;
  }
}
