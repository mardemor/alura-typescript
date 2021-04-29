import { Imprimivel } from "../models/index.js";

export function imprime(...objetos: Imprimivel[]) {

    objetos.forEach(objeto => { objeto.paraTexto() });

}