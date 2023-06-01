import { Personajes } from "../interfaces/personajes";

export class PersonajesDTO implements Personajes {
    id: number;
    nombre: string;
    estado: string;
    especie: string;
    img: string;
    tipo: string | null;
    genero: string;
    origen: string;
    descripcion: string;


    constructor(id: number, nombre: string, estado: string, especie: string, img: string, tipo: string | null, genero: string, origen: string, descripcion: string) {
        this.id = id ?? 0
        this.nombre = nombre ?? "";
        this.estado = estado ?? "";
        this.especie = especie ?? "";
        this.img = img ?? "";
        this.tipo = tipo ?? "";
        this.genero = genero ?? "";
        this.origen = origen ?? "";
        this.descripcion = descripcion ?? "";
    }
}