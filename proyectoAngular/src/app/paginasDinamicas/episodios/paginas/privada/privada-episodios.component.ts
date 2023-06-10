import { Component } from '@angular/core';
import { Episodios } from '../../interfaces/episodios';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicioEpisodioService } from '../../servicios/servicio-episodio.service';
import { MatDialog } from '@angular/material/dialog';
import { FormularioModalEpisodiosComponent } from '../../formulario-modal-episodios/formulario-modal-episodios.component';


@Component({
  selector: 'app-privada-episodios',
  templateUrl: './privada-episodios.component.html',
  styleUrls: ['./privada-episodios.component.css']
})
export class PrivadaEpisodiosComponent {

  //Variable de material para el contenido del desplegable
  panelOpenState = false;
  //Array de episodios tipo interfaz de episodios
  episodios: Episodios[] = [];
  formularioEpisodios: FormGroup;


  constructor(private formBuilder: FormBuilder, private srvEpisodios: ServicioEpisodioService, public dialog: MatDialog) {
    this.formularioEpisodios = this.formBuilder.group({});
  };

  ngOnInit() {
    this.obtenrEpisodios();
  };


  //Peticion get para obtener los episodios 
  private obtenrEpisodios(): void {
    this.srvEpisodios.getEpisodios().subscribe(
      (res: Episodios[]) => {
        this.episodios = res;
      }
    );
  };


  //Peticion delete para borrar los episodios
  eliminarEpisodio(episodio: Episodios) {
    this.srvEpisodios.eliminarEpisodio(episodio.id).subscribe(
      res => {
        console.log("Exito al borrar", res);
        //Llamamos a obtener episodios para repintar la pagina
        this.obtenrEpisodios();
      },
      (err) => {
        console.error(err);

      }
    );
  };



  //Editamos un episodio (episodio a editar, false)
  editar(data: Episodios, nuevoEp: boolean) {
    this.openFormularioModal(data, nuevoEp)

  }

  //Creamos un episodio (lista de episodios actuales, true)
  crear(data: Episodios[], nuevoEp: boolean) {
    this.openFormularioModal(data, nuevoEp)

  }


  private openFormularioModal(data: any, nuevoEp: boolean): void {

    const dialogRef = this.dialog.open(FormularioModalEpisodiosComponent, {
      width: '400px',
      //Le pasamos al componente modal
      //data.data -> episodio actual o lista de episodios del back, dependiendo de si se crea uno nuevo o se acutaliza 
      //data.nuevoEp -> valor boleano para saber si es un nuevo episodio o no lo es
      data: { data, nuevoEp }
    });

    //Base de material para el modal, en este caso cada vez que se cierra el modal, repintamos los datos que llegan del back/episodios
    dialogRef.afterClosed().subscribe(result => {
      //Llamamos a obtener episodios para repintar la pagina
      this.obtenrEpisodios()
    });
  }

};
