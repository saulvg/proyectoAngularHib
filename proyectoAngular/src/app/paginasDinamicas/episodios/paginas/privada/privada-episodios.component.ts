import { Component, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { Episodios } from '../../interfaces/episodios';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioEpisodioService } from '../../servicios/servicio-episodio.service';


@Component({
  selector: 'app-privada-episodios',
  templateUrl: './privada-episodios.component.html',
  styleUrls: ['./privada-episodios.component.css']
})
export class PrivadaEpisodiosComponent {
  /* @Input() episodios: Episodios[] = [];
  @Output() funcionpa = new EventEmitter(); */
  episodios: Episodios[] = []

  formularioEpisodios: FormGroup
  panelOpenState = false;






  constructor(private formBuilder: FormBuilder, private srvEpisodios: ServicioEpisodioService) {
    this.formularioEpisodios = this.formBuilder.group({});
  }

  ngOnInit() {
    this.crearFormulario();
    this.obtenrEpisodios();
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
    /* console.log('clcik guardar REPINTATE');
    this.funcionpa.emit(); */

    if (this.formularioEpisodios.valid) {
      const datos = this.formularioEpisodios.value

      this.srvEpisodios.actualizarDatos(datos).subscribe(
        res => {
          console.log('Exito', res);
          this.obtenrEpisodios()

        },
        (err) => {
          console.error(err);

        }
      )
    } else {
      console.error('Formulario Invalido');
    }

  }

  obtenrEpisodios() {

    this.srvEpisodios.getEpisodios().subscribe(
      (res: Episodios[]) => {
        this.episodios = res
        console.log(res);

      }
    );
  };

}
