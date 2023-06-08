import { Component } from '@angular/core';
import { Planetas } from './interfaces/planetas';
import { ServicioPlanetasService } from './servicios/servicio-planetas.service';

@Component({
  selector: 'app-vista-planetas',
  templateUrl: './vista-planetas.component.html',
  styleUrls: ['./vista-planetas.component.css']
})
export class VistaPlanetasComponent {

  planetas: Planetas[] = [];
  prueba: boolean = true;

    constructor(private srvPlanetas: ServicioPlanetasService) { }
          ngOnInit() {
                this.obtenerPlanetas();
                };
                  obtenerPlanetas() {
                        this.srvPlanetas.getPlanetas().subscribe(
                                (res: Planetas[]) => {
                                          this.planetas = res
                                              }
                                                  );
                                                  };
                                                    cli() {
                                                         this.prueba = !this.prueba
                                                          }

}
