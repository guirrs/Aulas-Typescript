//? ARRAY
let estiloMusical = ["rock", "jazz"];

//* Quando voce poe uma cadeia de strings, o ty vai identificar como :string, por isso nao pode por um numero
estiloMusical.push(10);

//*para especificar uma array, eh necessario por [] apos especificar o tipio
let esporte : string[] = ["basquete", "futebol"];

//* Para criar um array complexa, voce cria um objeto e espescifica ooq vai ter dentro com :("atributo" | "atributo")
let user :(number | string)[];
//* Pode ser escrito assim tbm
//? let user Array<number | string>;

user = [1, "Joao"];
user = [2, "Felipe"];
user = [3, "Carlos"];

//* Em uma equipe, embora seja masi facil apenas classificar como number, especifique os tipos de valores e quantidade, para que sua equipe não fique confusa com o q deve ser inserido na array
let combinação : [number, number];

combinação = [1, -30]; //certo
combinação = [1, 13, 4]; //errado pois especificou a quantidade 

//? OBJETO

let alimento :{
    id: number;
    nome: string;
    vencimento: Date | string;
    nutrientes: string[];
    marca :{
        idMarca: number,
        nomeMarca: string
    };
};

alimento = {id : 1, 
    nome :"peito de frando", 
    vencimento: "2027/03/22", 
    nutrientes :["Vitamina D", "proteina"], 
    marca : {idMarca: 2, nomeMarca :"Sadia"}};

//! {} NAO EH um valor nulo, ele eh idefinido no TypeScript, diferente do JS que eh nulo
let valor :{} = "É um valor";

//* Record eh uma ferramenta que cria objetos com chaves e atributos nos quais voce não tem certeza dos atributos e chaves que serao usadas
//* nesse caso string eh um chave primaria e string ou numero sera um atributo
let banco :Record<string, string | number>

banco = {
    entrada1: 1,
    entrada2: "Valor"
}