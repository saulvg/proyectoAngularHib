import { Component, Input } from '@angular/core';
import { Planetas } from '../../interfaces/planetas';
import { ServicioPlanetasService } from '../../servicios/servicio-planetas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-privada-planetas',
  templateUrl: './privada-planetas.component.html',
  styleUrls: ['./privada-planetas.component.css']
})
export class PrivadaPlanetasComponent {

  @Input () planetas: Planetas[] = [];

  formularioPlanetas: FormGroup;
  selectedPlaneta: any;

  borrar = "../../../../../assets/iconos/blackhole.png";
  editar = "../../../../../assets/iconos/portal-gun.png";

  constructor(private formBuilder: FormBuilder, private servPlanetas: ServicioPlanetasService){
    this.formularioPlanetas = this.formBuilder.group({});
  }

  ngOnInit(){
    this.crearFormulario();
    this.obtenerPlanetas();
  }

  crearFormulario(){
    this.formularioPlanetas = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      dimension: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });
  }

  crearPlaneta(){
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
    });
  }

  borrarPlaneta(planeta: Planetas){
    this.servPlanetas.eliminarPlaneta(planeta.id).subscribe(
      (res: Planetas[]) => {
        this.planetas = res;
        this.obtenerPlanetas();
      }
    );
  }

  editarPlaneta(planeta: Planetas) {
    this.miFuncion(planeta);
    this.formularioPlanetas.patchValue({
      id: planeta.id,
      nombre: planeta.nombre,
      dimension: planeta.dimension,
      descripcion: planeta.descripcion
    });
  }

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
  }

  miFuncion(planeta: Planetas){
    this.selectedPlaneta = planeta;
  }

  obtenerPlanetas() {
    this.servPlanetas.getPlanetas().subscribe(
      (res: Planetas[]) => {
        this.planetas = res;
        console.log(res);
      }
    );
  };
}
