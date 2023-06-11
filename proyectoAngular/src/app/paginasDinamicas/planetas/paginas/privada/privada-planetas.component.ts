import { Component, Input } from '@angular/core';
import { Planetas } from '../../interfaces/planetas';
import { ServicioPlanetasService } from '../../servicios/servicio-planetas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormModalPlanetaComponent } from './form-modal-planeta/form-modal-planeta.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privada-planetas',
  templateUrl: './privada-planetas.component.html',
  styleUrls: ['./privada-planetas.component.css']
})
export class PrivadaPlanetasComponent {

  //Rutas correspondientes con los iconos que aparecen en la parte privada de la web
  crear = "../../../../../assets/iconos/create.png";
  borrar = "../../../../../assets/iconos/blackhole.png";
  editar = "../../../../../assets/iconos/portal-gun.png";

  @Input() planetas: Planetas[] = [];

  //Variable que guardará el planeta que se pasa al formulario modal correspondiente con la edición
  planetaSeleccionado: any;
  // el ! indica que la variable puede ser null
  dialogRef!: MatDialogRef<any>;

  constructor(private formBuilder: FormBuilder, private servPlanetas: ServicioPlanetasService, private dialog: MatDialog, private router: Router) {
    
  }

  ngOnInit() {
    this.obtenerPlanetas();
  }

  /**
   * Método que se encarga de obtener los planetas almacenados en el servidor
   */
  obtenerPlanetas() {
    this.servPlanetas.getPlanetas().subscribe(
      (res: Planetas[]) => {
        this.planetas = res;
        console.log(res);
      },
      (err) => {
        console.log("error", err);
        this.router.navigate(['/not-found']);

      }
    );
  }

  /**
   * Método que se encarga de borrar el planeta seleccionado, incluye la función confirm que se encarga
   * de preguntar antes de efectuar el borrado del planeta
   * @param planeta Objeto de tipo Planetas que contiene la información del planeta seleccionado
   */
  borrarPlaneta(planeta: Planetas) {
    const confirmacion = confirm('¿Estás seguro de que quieres borrar el planeta?');

    if (confirmacion) {
      this.servPlanetas.eliminarPlaneta(planeta.id).subscribe(
        res => {
          console.log("Éxito al borrar", res);
          this.obtenerPlanetas();
        },
        (err) => {
          console.error(err);
        }
      );
    }

  }

  /**
   * Método que se encarga de almacenar el planeta seleccionado
   * @param planeta Objeto de tipo Planetas que contiene la información del planeta seleccionado
   */
  setPlanetaSeleccionado(planeta: Planetas) {
    this.planetaSeleccionado = planeta;

  }

  /**
   * Método que se encarga de abrir el formulario modal
   * @param editar Booleano, si es true abre el formulario para editar el planeta y si es false abre al formulario para crear un planeta
   * @param planetas Array con los planetas
   */
  abrirModal(editar: boolean, planetas: Planetas[]) {

    if (editar) {
      //Abre el mat-dialog con el tamaño especificado y le pasa los datos del planeta seleccionado y el array de planetas
      this.dialogRef = this.dialog.open(FormModalPlanetaComponent, {
        width: '400px',
        data: { planetaSeleccionado: this.planetaSeleccionado, planetas: this.planetas }
      });
    } else {
      //Al crear un planeta solo se le pasan los datos del array de planetas
      this.dialogRef = this.dialog.open(FormModalPlanetaComponent, {
        width: '400px',
        data: { planetas: this.planetas }
      });
    }

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //Se obtienen los planetas después de cerrar el formulario modal
        this.obtenerPlanetas();
      }
    });
  }
}
