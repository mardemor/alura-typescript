import { logarTempoDeExecucao } from '../helpers/decorators/index.js';

export abstract class View<T> {

    private _elemento: JQuery;
    private _escapar: boolean;

    constructor(seletor: string, escapar: boolean = true) {
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    //@logarTempoDeExecucao()
    update(model: T) {
        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.html(template);
    }

    protected abstract template(model: T): string;
}
