//* any permite que a variavel possa ter qualquer atribuição
//* Use quando voce não quer ser especifico
let age : any;

age = 37
age = '37';
age = [];
age = {};
age = "";

//* caso voce use | voce pode por mais de uma atribuição a variavel
let year : number | string;

year = 1983;
year = "2020";