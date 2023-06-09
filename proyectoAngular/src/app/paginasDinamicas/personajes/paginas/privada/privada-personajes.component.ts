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

  formPersonajes: FormGroup;
  selectedPersonaje: any;

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
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      especie: ['', [Validators.required]],
      img: [''],
      tipo: [''],
      genero: [''],
      origen: [''],
      descripcion: ['']
    });
  }

  editarPersonaje(personaje: Personajes) {
    this.setSelectedPersonaje(personaje);
    this.formPersonajes.patchValue({
      id: personaje.id,
      nombre: personaje.nombre,
      estado: personaje.estado,
      especie: personaje.especie,
      img: personaje.img,
      tipo: personaje.tipo,
      genero: personaje.genero,
      origen: personaje.origen,
      descripcion: personaje.descripcion
    });
  }

  crearPersonaje() {
    let nuevoPersonaje: Personajes = {
      id: 0,
      nombre: '',
      estado: '',
      especie: '',
      img: '',
      tipo: '',
      genero: '',
      origen: '',
      descripcion: '',
      mostrarDescripcion: false
    };
    if (this.selectedPersonaje !== nuevoPersonaje) {
      this.setSelectedPersonaje(nuevoPersonaje);
      this.formPersonajes.patchValue({
        id: nuevoPersonaje.id,
        nombre: nuevoPersonaje.nombre,
        estado: nuevoPersonaje.estado,
        especie: nuevoPersonaje.especie,
        img: nuevoPersonaje.img,
        tipo: nuevoPersonaje.tipo,
        genero: nuevoPersonaje.genero,
        origen: nuevoPersonaje.origen,
        descripcion: nuevoPersonaje.descripcion
      });
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
  }

  borrarPersonaje(personaje: Personajes) {
    this.servPersonajes.eliminarPersonaje(personaje.id).subscribe(
      (res: Personajes[]) => {
        this.personajes = res;
        this.obtenerPersonajes();
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
}
