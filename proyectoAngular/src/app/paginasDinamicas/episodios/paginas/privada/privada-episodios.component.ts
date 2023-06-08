import { Component, Input } from '@angular/core';
import { Episodios } from '../../interfaces/episodios';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioEpisodioService } from '../../servicios/servicio-episodio.service';


@Component({
  selector: 'app-privada-episodios',
  templateUrl: './privada-episodios.component.html',
  styleUrls: ['./privada-episodios.component.css']
})
export class PrivadaEpisodiosComponent {
  @Input() episodios: Episodios[] = [];

  formularioEpisodios: FormGroup


  constructor(private formBuilder: FormBuilder, private srvEpisodios: ServicioEpisodioService) {
    this.formularioEpisodios = this.formBuilder.group({});
  }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formularioEpisodios = this.formBuilder.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      episodio: ['', [Validators.required]],
      sinopsis: ['', [Validators.required]],
      fechaEmision: ['', [Validators.required]]
    });
  }

  editarEpisodio(episodio: Episodios) {

    this.formularioEpisodios.patchValue({
      id: episodio.id,
      titulo: episodio.titulo,
      episodio: episodio.episodio,
      sinopsis: episodio.sinopsis,
      fechaEmision: new Date(episodio.fechaEmision).toISOString().slice(0, 10)
    });
  }

  enviarDatos() {

    if (this.formularioEpisodios.valid) {
      const datos = this.formularioEpisodios.value

      this.srvEpisodios.actualizarDatos(datos).subscribe(
        res => {
          console.log('Exito', res);

        },
        (err) => {
          console.error(err);

        }
      )
    } else {
      console.error('Formulario Invalido');
    }

  }

}
