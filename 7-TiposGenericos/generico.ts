//* Array<Tipo> eh um tipo generico
let names : Array<string> = ['Ana', 'Bia', 'Carlos'];

//* Tipos genericos servem para deiar a função mais flexivel, permitindo que ela trabalhe com varios valores, normalmente usamos <T> para representar o tipo generico
//* Ela eh util em banco de dados, api, etc
type DataStore<T> = {
    [key: string]: T
};

let Store: DataStore<string | boolean> = {};
Store.names = 'Ana,Bia,Carlos';
Store.isOpen = true;

//* Nesse exemplo, o T permite definir os atributos dos conteudos e do retorno da funcao
//* Voce pode usar U, V, W, K, etc para representar outros tipos genericos
function merge<T, U>(a: T, b: U){
    return[a,b]
}

const ids = merge(1,'Ana');

//* Extends em tipos genericos serve para restringir os tipos aceitos
//* Voce usar 2 tipos genericos em vez de um, voce diz ao typesript que os 2 objetos são objetos de conteudos diferentes que serao unidos
function mergeObjects<T extends object, U extends object>(a: T, b: U){
    return {...a, ...b};
}

const merged = mergeObjects({name: 'Ana'}, {age: 30});

class User<T>{
    constructor(public id: T){}
}

const user = new User('354');