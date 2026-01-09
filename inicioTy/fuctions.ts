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

//* Assim se declara um função que retorna uma função, (nome : (variaveis) => tipo do retorno)
function perfomace(cd : (m : string) => void)
{
    cd("Trabalho feito");
}
perfomace(log);

//* Voce pode criar funcoes dentro da type
type User = {
    nome: string;
    idade : number;
    funcao : () => string;
}

let usuario : User = {
    nome: "Leo",
    idade: 24,
    funcao() {
        console.log("Boomm diaa");
        return this.nome;
    }
}

//* Voce pode retornar a funcao uma type
usuario.funcao();