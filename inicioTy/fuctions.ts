//* Uma função em ts deve ser por os parametros dentro com suas atribuicões;
//* Impostas, voce pode especificar o valor a retornar usando : "atributo"
function add(a :number, b: number) : number
{
    return a+b;
}

//* Como as funcoes são numeros o TS ja interpreta que vai retornar um numero
function reduction(c : number, d :number)
{
    return c-d;
}

//*Funcoes vazias não te a necessidade de por : void
function log(message : string)
{
    console.log("BOOMM DIIAAA");
}

//* Retornar never diferente de void, indica ao TS que essa função nunca tera um fim, logo, ela pode travar o programa
function logErro(errorMesssage : string) : never
{
    console.log(errorMesssage);
    throw new Error(errorMesssage);
}