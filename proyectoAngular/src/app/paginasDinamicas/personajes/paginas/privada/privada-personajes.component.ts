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
      img: ['', [Validators.required]],
      tipo: [''],
      genero: [''],
      origen: [''],
      descripcion: ['']
    });
  }

  editarPersonaje(personaje: Personajes) {
    this.miFuncion(personaje);
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
      id: 0, // Asigna un valor válido para el ID del nuevo personaje
      nombre: '', // Asigna un valor válido para el nombre del nuevo personaje
      estado: '', // Asigna un valor válido para el estado del nuevo personaje
      especie: '', // Asigna un valor válido para la especie del nuevo personaje
      img: '', // Asigna un valor válido para la URL de la imagen del nuevo personaje
      tipo: '',
      genero: '',
      origen: '',
      descripcion: '',
      mostrarDescripcion: false
    };
    this.miFuncion(nuevoPersonaje);
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

  miFuncion(personaje: Personajes) {
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
