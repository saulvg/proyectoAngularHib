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

  @Input() planetas: Planetas[] = [];

  panelOpenState = false;
  //planetas: Planetas[] = [];
  // formularioPlanetas: FormGroup;
  // mostrarCrearForm: boolean = false;
  planetaSeleccionado: any;
  dialogRef!: MatDialogRef<any>;

  crear = "../../../../../assets/iconos/create.png";
  borrar = "../../../../../assets/iconos/blackhole.png";
  editar = "../../../../../assets/iconos/portal-gun.png";

  constructor(private formBuilder: FormBuilder, private servPlanetas: ServicioPlanetasService, private dialog: MatDialog, private router: Router) {
    //this.formularioPlanetas = this.formBuilder.group({});
  }

  ngOnInit() {
    // this.crearFormulario();
    this.obtenerPlanetas();
  }

  obtenerPlanetas() {
    this.servPlanetas.getPlanetas().subscribe(
      (res: Planetas[]) => {
        this.planetas = res;
        console.log(res);
      },
      (err) => {
        console.log("Soy error", err);
        this.router.navigate(['/not-found']);

      }
    );
  }

  /*
    crearFormulario(): void{
      this.formularioPlanetas = this.formBuilder.group({
        id: [''],
        nombre: ['', [Validators.required]],
        dimension: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
        img: ['']
      });
    }*/
  /*
    crearPlaneta(data: Planetas[]): void {
      const maxId = data.reduce((max: any, obj: any) => (obj.id > max ? obj.id: max), 0);
  
      this.formularioPlanetas.value.id = maxId + 1;
  
      if(this.formularioPlanetas.valid) {
        const datos = this.formularioPlanetas.value;
        this.servPlanetas.crearPlaneta(datos).subscribe(
          res => {
            console.log("Exito al crear", res);
            this.obtenerPlanetas();
            this.mostrarCrearForm = false;
          },
          (err) => {
            console.error(err);
          }
        );
      } else {
        console.error("Formulario Inválido");
      };*/
  /*
  let nuevoPlaneta: Planetas = {
    id: 0,
    nombre: '',
    dimension: '',
    descripcion: '',
    img: ''
  };

  this.miFuncion(nuevoPlaneta);

  this.formularioPlanetas.patchValue({
    id: nuevoPlaneta.id,
    nombre: nuevoPlaneta.nombre,
    dimension: nuevoPlaneta.dimension,
    img: nuevoPlaneta.img
  });*/
  //}

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
  /*
    editarPlaneta(planeta: Planetas) {
      
      if(this.formularioPlanetas.valid){
        const datos = this.formularioPlanetas.value;
  
        this.servPlanetas.actualizarDatos(datos).subscribe(
          res => {
            console.log("Exito al editar", res);
            this.obtenerPlanetas();
          },
          (err) => {
            console.error(err);
          }
        );
      } else {
        console.error("Formulario Inválido");
      };*/
  /*this.miFuncion(planeta);
  this.formularioPlanetas.patchValue({
    id: planeta.id,
    nombre: planeta.nombre,
    dimension: planeta.dimension,
    descripcion: planeta.descripcion
  });*/
  // }
  /*
    enviarDatos() {
      if(this.formularioPlanetas.valid) {
        const datos = this.formularioPlanetas.value;
  
        this.servPlanetas.editarPlaneta(datos).subscribe(
          res => {
            console.log('Exito', res);
            this.obtenerPlanetas();
          },
          (err) => {
            console.error(err);
          }
        )
      } else {
        console.error('Formulario Inavalido');
      }
    }*/
  /*
    miFuncion(planeta: Planetas){
      this.selectedPlaneta = planeta;
    }*/


  /*
    abrirFormularioPlanetas(data: any, nuevoPlaneta: boolean): void {
  
      if(!nuevoPlaneta){
        this.formularioPlanetas.patchValue({
          id: data.id,
          nombre: data.nombre,
          dimension: data.dimension,
          descripcion: data.descripcion,
          img: data.img
        });
      }
  
      if(nuevoPlaneta){
        this.formularioPlanetas.patchValue({
          id: "",
          nombre: "",
          dimension: "",
          descripcion: "",
          img: ""
        });
      }
    }*/

  setPlanetaSeleccionado(planeta: Planetas) {
    this.planetaSeleccionado = planeta;

  }

  abrirModal(editar: boolean, planetas: Planetas[]) {

    if (editar) {
      this.dialogRef = this.dialog.open(FormModalPlanetaComponent, {
        width: '400px',
        data: { planetaSeleccionado: this.planetaSeleccionado, planetas: this.planetas }
      });
    } else {
      this.dialogRef = this.dialog.open(FormModalPlanetaComponent, {
        width: '400px',
        data: { planetas: this.planetas }
      });
    }

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado', result);
      if (result) {
        this.obtenerPlanetas();
      }
    });
  }
}
