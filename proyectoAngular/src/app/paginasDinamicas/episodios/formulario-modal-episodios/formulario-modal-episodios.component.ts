import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Episodios } from '../interfaces/episodios';
import { ServicioEpisodioService } from '../servicios/servicio-episodio.service';

@Component({
  selector: 'app-formulario-modal-episodios',
  templateUrl: './formulario-modal-episodios.component.html',
  styleUrls: ['./formulario-modal-episodios.component.css']
})
export class FormularioModalEpisodiosComponent {
  formularioEpisodios: FormGroup;

  episodios: Episodios[] = [];

  constructor(
    private srvEpisodios: ServicioEpisodioService,
    private formBuilder: FormBuilder,
    //Por el formulario modal que hemos hecho con material
    public dialogRef: MatDialogRef<FormularioModalEpisodiosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formularioEpisodios = this.formBuilder.group({});
  };

  ngOnInit() {
    this.crearFormulario();
  };

  //Funcion para cerrar el fomrulario (base material)
  close(): void {
    this.dialogRef.close();
  }

  //Funcion para enviar los datos del formulario (base material)
  submitForm(): void {
    //Comporbamos si el formulario es valido
    if (this.formularioEpisodios.valid) {
      console.log('Nuevo episodio', this.data.nuevoEp);

      //Si es NUEVO episodio 
      if (this.data.nuevoEp) {
        this.crearEpisodio()
      };
      //Si es EDITAR episodio 
      if (!this.data.nuevoEp) {
        this.editarEpisodios()
      };

      this.dialogRef.close();
    } else {
      //Logica de si el formulario no fuese valido
      console.error("Formulario Invalido");
    };
  };


  //Creamos los campos del formulario reactivo y sus respectivos validadores (los que consideresmos)
  //Si el formulario es de editar lo rellenamos con los campos del episodio a editar, si no vaciamos los campos
  crearFormulario(): void {
    const nuevoEpisodio: boolean = this.data.nuevoEp;
    const datosEpisodio: Episodios = this.data.data;

    this.formularioEpisodios = this.formBuilder.group({
      id: [nuevoEpisodio ? "" : datosEpisodio.id],
      titulo: [nuevoEpisodio ? "" : datosEpisodio.titulo, [Validators.required]],
      episodio: [nuevoEpisodio ? "" : datosEpisodio.episodio, [Validators.required, this.formatoValidator()]],
      sinopsis: [nuevoEpisodio ? "" : datosEpisodio.sinopsis, [Validators.required]],
      fechaEmision: [nuevoEpisodio ? "" : new Date(datosEpisodio.fechaEmision).toISOString().slice(0, 10), [Validators.required]],
    });
  };
  // Validador personalizado para el formato S_,_E_,_ (barras bajas representan hueco para numero)
  private formatoValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const formatoRegex = /^S\d+E\d+$/;

      if (control.value && !formatoRegex.test(control.value)) {
        return { formatoInvalido: true };
      }

      return null;
    };
  }

  //Peticion post para crear los episodios
  crearEpisodio(): void {
    // Encontrar el valor del "id" más alto (suponemos que siguen un orden logico y por lo tanto un nuevo episodio sera el siguiente id existente)
    const maxId = this.data.data.reduce((max: any, obj: any) => (obj.id > max ? obj.id : max), 0);
    //Asignamos al campo id del episodio el valor proximo del id mas alto encontrdo en el array
    this.formularioEpisodios.value.id = maxId + 1;


    const datos = this.formularioEpisodios.value;
    this.srvEpisodios.crearEpisodio(datos).subscribe(
      res => {
        console.log("Exito al crear", res);
      },
      (err) => {
        console.error(err);
      }
    );

  };

  //Peticion put para editar los episodios
  editarEpisodios(): void {

    const datos = this.formularioEpisodios.value;

    this.srvEpisodios.actualizarDatos(datos).subscribe(
      res => {
        console.log("Exito al editar", res);
      },
      (err) => {
        console.error(err);
      }
    );
  };

}
