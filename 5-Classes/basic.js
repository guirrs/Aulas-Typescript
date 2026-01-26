"use strict";
//? Classe JS
class UserJS {
    //* Eh necessario criar um construtor para inicializar as variaveis e elas receberem valores
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
//? Classe TS
class UserTS {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        //* Por padrao, as variaveis serao publicas
        this.hobbies = [];
    }
}
const max = new UserTS('Max', 18);
const allan = new UserTS('Allan', 23);
max.hobbies = ["Futbol"];
max.hobbies.push("Volei");
console.log(max, allan);
