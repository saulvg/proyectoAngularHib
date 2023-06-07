import { Planetas } from "../interfaces/planetas";

export class PlanetasDTO implements Planetas {
    id: number;
    nombre: string;
    img: string;
    dimension: string;
    descripcion: string;

    constructor(id: number, nombre: string, img: string, dimension: string, descripcion: string) {
        this.id = id ?? 0
        this.nombre = nombre ?? "";
        this.img = img ?? "";
        this.dimension = dimension ?? "";
        this.descripcion = descripcion ?? "";
    }
}