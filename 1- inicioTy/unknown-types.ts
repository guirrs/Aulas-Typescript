//* O tipo unknown aceita qualquer valor, entretanto, não tão liberal quanto o any, ent ele permite fazer verificações do conteudo. Eh util quando voce usa uma API por exemplo. Ele permite usarmos ações com maior segurança
//* unknow obriga a verificar o codigo
function process(val: unknown) {
    if (typeof val === "object"
        && !!val
        && 'log' in val
        && typeof val.log === 'function'
    ) {
        val.log();
    }
}