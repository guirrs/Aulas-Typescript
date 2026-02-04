"use strict";
//* Existe 2 tipos de decoradores no typescript, o ECMAScript Decorators e o Experimental Decorators, o Experimental Decorators é o mais antigo que tem a idéia do estagio 2, enquanto o outro esta no estagio 3, que é mais atualizado e para maquinas mais recentes
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//? ECMASCRIPT
//* //* new(...args: any[]) => any define um tipo de construtor: uma função que, ao ser chamada com 'new', cria uma instância (objeto). Aqui, garante que T seja a classe (construtor), não uma instância, permitindo estendê-la no decorador. 
function logger(target, ctx) {
    console.log("logger decorator");
    console.log(target);
    console.log(ctx);
    return class extends target {
        constructor(...args) {
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
    };
}
//* No metodo, os decoradores tem que ser ClassMethodDecoratorContext
function autobind(target, ctx) {
    //* addInitializer permite chamar o bind no construtor
    ctx.addInitializer(function () {
        this[ctx.name] = this[ctx.name].bind(this);
    });
    //* Assim, é possivel preservar a função original do codigo
    return function () {
        console.log("Executando função original");
        //* Semelhante a bind, mas ele guarda imediatamente o q contem e pode ser sobreescrito
        target.apply(this);
    };
}
//? Decorador de Campo
//* Nessa caso, target sera idefinidao pois sera executado antes q o codigo seja inicializado
function fieldLogger(target, ctx) {
    console.log(target);
    console.log(ctx);
}
let Person = class Person {
    constructor() {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "Guilherme"
        });
        //* Bind é uma função que permite que o this seja permanente
        this.greet = this.greet.bind(this);
    }
    greet() {
        console.log("Oi meu nome é " + this.name);
    }
};
__decorate([
    fieldLogger
], Person.prototype, "name", void 0);
__decorate([
    autobind
], Person.prototype, "greet", null);
Person = __decorate([
    logger
], Person);
const guinas = new Person();
const greet = guinas.greet;
greet();
