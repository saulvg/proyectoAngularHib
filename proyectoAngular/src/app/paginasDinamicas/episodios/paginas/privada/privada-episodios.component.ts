import { Component } from '@angular/core';
import { Episodios } from '../../interfaces/episodios';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioEpisodioService } from '../../servicios/servicio-episodio.service';


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
  mostrarCrearForm: boolean = false;


  constructor(private formBuilder: FormBuilder, private srvEpisodios: ServicioEpisodioService) {
    this.formularioEpisodios = this.formBuilder.group({});
  };

  ngOnInit() {
    this.crearFormulario();
    this.obtenrEpisodios();
  };

  //Creamos los campos del formulario reactivo y sus respectivos validadores
  crearFormulario(): void {
    this.formularioEpisodios = this.formBuilder.group({
      id: [""],
      titulo: ["", [Validators.required]],
      episodio: ["", [Validators.required]],
      sinopsis: ["", [Validators.required]],
      fechaEmision: ["", [Validators.required]]
    });
  };


  //Peticion get para obtener los episodios 
  obtenrEpisodios(): void {
    this.srvEpisodios.getEpisodios().subscribe(
      (res: Episodios[]) => {
        this.episodios = res;
      }
    );
  };


  //Peticion put para editar los episodios
  editarEpisodios(): void {

    //Comporbamos si el formulario es valido
    if (this.formularioEpisodios.valid) {
      const datos = this.formularioEpisodios.value;

      this.srvEpisodios.actualizarDatos(datos).subscribe(
        res => {
          console.log("Exito al editar", res);
          //Llamamos a obtener episodios para repintar la pagina
          this.obtenrEpisodios();
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      console.error("Formulario Invalido");
    };

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

  //Peticion post para crear los episodios
  crearEpisodio(data: Episodios[]): void {

    // Encontrar el valor del "id" más alto (suponemos que siguen un orden logico y por lo tanto un nuevo episodio sera el siguiente id existente)
    const maxId = data.reduce((max: any, obj: any) => (obj.id > max ? obj.id : max), 0);
    //Asignamos al campo id del episodio el valor proximo del id mas alto encontrdo en el array
    this.formularioEpisodios.value.id = maxId + 1;

    //Comporbamos si el formulario es valido
    if (this.formularioEpisodios.valid) {
      const datos = this.formularioEpisodios.value;
      this.srvEpisodios.crearEpisodio(datos).subscribe(
        res => {
          console.log("Exito al crear", res);
          //Llamamos a obtener episodios para repintar la pagina
          this.obtenrEpisodios();
          this.mostrarCrearForm = false;
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      console.error("Formulario Invalido");
    };

  };



  //Si el formulario es de editar lo rellenamos con los campos del episodio a editar, si no vaciamos los campos
  abrirFormularioEpisodios(data: any, nuevoEp: boolean): void {

    if (!nuevoEp) {

      this.formularioEpisodios.patchValue({
        id: data.id,
        titulo: data.titulo,
        episodio: data.episodio,
        sinopsis: data.sinopsis,
        fechaEmision: new Date(data.fechaEmision).toISOString().slice(0, 10)
      });
    };

    if (nuevoEp) {
      this.formularioEpisodios.patchValue({
        id: "",
        titulo: "",
        episodio: "",
        sinopsis: "",
        fechaEmision: ""
      });
    };
  };
};
