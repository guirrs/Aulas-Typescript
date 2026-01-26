//? Classe JS
class UserJS{
    name : string;
    age : number;

    //* Eh necessario criar um construtor para inicializar as variaveis e elas receberem valores
    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }
}

//? Classe TS
class UserTS{
    //* Por padrao, as variaveis serao publicas
    hobbies: string[] = []
    constructor(readonly name: string, public age: number){}
}

const max = new UserTS('Max', 18);
const allan = new UserTS('Allan', 23);

max.hobbies = ["Futbol"];
max.hobbies.push("Volei");

console.log(max, allan)