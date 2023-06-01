import { Episodios } from "../interfaces/episodios";


export class EpisodiosDTO implements Episodios {
    id: number;
    titulo: string;
    fechaEmision: string;
    episodio: string;
    sinopsis: string;

    constructor(id: number, titulo: string, fechaEmision: string, episodio: string, sinopsis: string) {
        this.id = id ?? 0;
        this.titulo = titulo ?? "";
        this.fechaEmision = fechaEmision ?? "";
        this.episodio = episodio ?? "";
        this.sinopsis = sinopsis ?? "";
    }
}