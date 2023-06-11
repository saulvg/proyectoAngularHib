import { Component, Input } from '@angular/core';
import { Planetas } from '../../interfaces/planetas';
import { ServicioPlanetasService } from '../../servicios/servicio-planetas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publica-planetas',
  templateUrl: './publica-planetas.component.html',
  styleUrls: ['./publica-planetas.component.css']
})
export class PublicaPlanetasComponent {
  planetas: Planetas[] = [];
 
  constructor(private srvPlanetas: ServicioPlanetasService, private router: Router) {

  }

  /**
   * Método que se encarga de obtener un array de todos los planetas del servicio
   */
  obtenerPlaneta() {
    this.srvPlanetas.getPlanetas().subscribe(
      (res: Planetas[]) => {
        this.planetas = res;
      },
      (err) => {
        console.log("error", err);
        this.router.navigate(['/not-found']);

      }
    );
  };

  ngOnInit() {
    this.obtenerPlaneta();
  }
}
