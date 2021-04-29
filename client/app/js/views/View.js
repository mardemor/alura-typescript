export class View {
    constructor(seletor, escapar = true) {
        this._elemento = $(seletor);
        this._escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.html(template);
    }
}
