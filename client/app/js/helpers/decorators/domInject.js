export function domInject(seletor) {
    return function (target, key) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                console.log(`buscando elemento ${seletor} para ${key}`);
                elemento = $(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, key, { get: getter });
    };
}
