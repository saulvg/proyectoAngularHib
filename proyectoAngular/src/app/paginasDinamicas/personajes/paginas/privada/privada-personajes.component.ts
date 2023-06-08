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
  @Input() personajes: Personajes[] = []

  borrar = "../../../../../assets/iconos/blackhole.png"
  editar = "../../../../../assets/iconos/portal-gun.png"

  formPersonajes: FormGroup;
  selectedPersonaje: any;

  @Output() muestraDescripcion: EventEmitter<Personajes> = new EventEmitter<Personajes>();

  constructor(private formBuilder: FormBuilder, private servPersonajes: ServicioPersonajesService) {
    this.formPersonajes = this.formBuilder.group({});
  }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formPersonajes = this.formBuilder.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      especie: ['', [Validators.required]],
      img: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      origen: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });
  }

  editarPersonaje(personaje: Personajes) {
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

  enviarDatos() {
    if (this.formPersonajes.valid) {
      const datos = this.formPersonajes.value;
      this.servPersonajes.editarPersonaje(datos).subscribe(
        res => { console.log('Exito', res); },
        (err) => { console.error(err); }
      )
    } else {
      console.error("Formulario invalido");
    }
  }


  miFuncion(personaje: Personajes) {
    this.selectedPersonaje = personaje;
  }

  borrarPersonaje(personaje: Personajes) {
    this.servPersonajes.eliminarPersonaje(personaje.id).subscribe(
      (res: Personajes[]) => {
        this.personajes = res;
        location.reload(); // Recarga la pagina tras borrar
      }
    );
  }


}
