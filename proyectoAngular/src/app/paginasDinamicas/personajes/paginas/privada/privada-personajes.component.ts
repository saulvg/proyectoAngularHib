import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personajes } from '../../interfaces/personajes';
import { ServicioPersonajesService } from '../../servicios/servicio-personajes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-privada-personajes',
  templateUrl: './privada-personajes.component.html',
  styleUrls: ['./privada-personajes.component.css']
})
export class PrivadaPersonajesComponent {
  @Input() personajes: Personajes[] = [];

  crear = "../../../../../assets/iconos/create.png";
  borrar = "../../../../../assets/iconos/blackhole.png";
  editar = "../../../../../assets/iconos/portal-gun.png";

  panelOpenState = false;

  formPersonajes: FormGroup;
  selectedPersonaje: any;
  mostrarCrearForm: boolean = false;

  @Output() muestraDescripcion: EventEmitter<Personajes> = new EventEmitter<Personajes>();

  constructor(private formBuilder: FormBuilder, private servPersonajes: ServicioPersonajesService) {
    this.formPersonajes = this.formBuilder.group({});
  }

  ngOnInit() {
    this.crearFormulario();
    this.obtenerPersonajes();
  }

  crearFormulario() {
    this.formPersonajes = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      especie: [''],
      img: [''],
      tipo: [''],
      genero: ['', [Validators.required]],
      origen: [''],
      descripcion: ['']
    });
  }

  editarPersonaje(): void {

    if (this.formPersonajes.valid) {
      const datos = this.formPersonajes.value;
      this.servPersonajes.editarPersonaje(datos).subscribe(
        res => {
          console.log("Exito al editar", res);
          this.obtenerPersonajes();
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.error("Formulario invalido");
    }

    //this.setSelectedPersonaje(personaje);
  }

  crearPersonaje(data: Personajes[]): void {
    const maxId = data.reduce((max: any, obj: any) => (obj.id > max ? obj.id : max), 0);
    this.formPersonajes.value.id = maxId + 1;

    // Si el formulario es valido
    if (this.formPersonajes.valid) {
      const datos = this.formPersonajes.value;
      this.servPersonajes.crearPersonaje(datos).subscribe(
        res => {
          console.log("Exito al crear", res);
          //
          this.obtenerPersonajes();
          this.mostrarCrearForm = false;
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      console.error("Formulario invalido");
    }
  }

  enviarDatos() {
    if (this.formPersonajes.valid) {
      const datos = this.formPersonajes.value;
      console.log(this.formPersonajes.value);
      this.servPersonajes.crearPersonaje(datos).subscribe(
        res => {
          console.log('Éxito', res);
          this.obtenerPersonajes();
        },
        err => {
          console.error(err);
        }
      );
    } else {
      console.error("Formulario inválido");
    }
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

  obtenerPersonajes() {
    this.servPersonajes.getPersonajes().subscribe(
      (res: Personajes[]) => {
        this.personajes = res;
        console.log(res);
      }
    );
  }

  abrirFormularioPersonajes(data: any, nuevoPersonaje: boolean): void {
    if (!nuevoPersonaje) {
      this.formPersonajes.patchValue({
        id: data.id,
        nombre: data.nombre,
        estado: data.estado,
        especie: data.especie,
        img: data.img,
        tipo: data.tipo,
        genero: data.genero,
        origen: data.origen,
        descripcion: data.descripcion
      });
    }

    if (nuevoPersonaje) {
      this.formPersonajes.patchValue({
        id: "",
        nombre: "",
        estado: "",
        especie: "",
        img: "",
        tipo: "",
        genero: "",
        origen: "",
        descripcion: ""
      })
    }
  }
}
