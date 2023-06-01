import { Planetas } from "../interfaces/planetas";

export class PlanetasDTO implements Planetas {
    id: number;
    nombre: string;
    dimension: string;
    descripcion: string;

    constructor(id: number, nombre: string, dimension: string, descripcion: string) {
        this.id = id ?? 0
        this.nombre = nombre ?? "";
        this.dimension = dimension ?? "";
        this.descripcion = descripcion ?? "";
    }
}