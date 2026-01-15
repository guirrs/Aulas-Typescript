//* enum eh uma ferramenta excluiva do TS, ela permite que voce limite os valores de uma variavel, nesse caso, cargo so pode ser admin, editor e cliente;
enum Cargo{
    admin, //0
    editor, //1
    cliente, //2
}

//* Pode chama-la dessa forma
let user1Cargo = Cargo.cliente;
//* Ou pela ordem da array assim
let user2Cargo = 2;

//* Voce tambem pode criar atributos especificos a variavel como escrito abaixo
let userRegra : 'admin' | 'editor' | 'cliente' = 'cliente'; //* O Valor so pode ser uma dessas 3 opcçoes

//* No mercado, o Enum eh mais comum   
userRegra = 'admin';

let possiveisResultados : [1 | -1, 28 | 29];

possiveisResultados = [1, 28];

//* Type voce cria uma variavel personalizada que sempre tera os valores impostos
type RegrasType = 'admin' | 'editor' | 'cliente' | 'vendedor';

type UserChoices = 
{
    nome: string;
    idade: number;
    regra: RegrasType;
    permissoes: string[];
}

let userType :RegrasType = 'admin'

function acesso(role : RegrasType)
{

}