export function logarTempoDeExecucao() {
    return function (target, key, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log('--------------------------------');
            console.log(`Nome do metodo: ${key}`);
            console.log(`Parametros do metodo: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Retorno do metodo: ${retorno}`);
            console.log(`Tempo de execução: ${t2 - t1} ms`);
            console.log('--------------------------------');
            return retorno;
        };
        return descriptor;
    };
}
