import { Imprimivel } from './Imprimivel.js';
import { Igualavel } from './Igualavel.js';

export class Negociacao implements Imprimivel, Igualavel<Negociacao> {

    constructor(private _data: Date, private _quantidade: number,  private _valor: number){}

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    paraTexto(): void {
        console.log('-- Negociacao --');
        console.log(
`Data: ${this.data}
Quantidade: ${this.quantidade}
Valor: ${this.valor}
Volume: ${this.volume}`
        );
    }

    ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();
    }
}