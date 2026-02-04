//* Existe 2 tipos de decoradores no typescript, o ECMAScript Decorators e o Experimental Decorators, o Experimental Decorators é o mais antigo que tem a idéia do estagio 2, enquanto o outro esta no estagio 3, que é mais atualizado e para maquinas mais recentes

//? ECMASCRIPT
//* //* new(...args: any[]) => any define um tipo de construtor: uma função que, ao ser chamada com 'new', cria uma instância (objeto). Aqui, garante que T seja a classe (construtor), não uma instância, permitindo estendê-la no decorador. 
function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
    console.log("logger decorator");
    console.log(target);
    console.log(ctx);

    return class extends target{
        constructor(...args: any[]){
            super(...args);
            console.log('class constructor');   
            console.log(this);
        }
    };
}

//* No metodo, os decoradores tem que ser ClassMethodDecoratorContext
function autobind(target: (...args: any[]) => any, ctx : ClassMethodDecoratorContext){
    //* addInitializer permite chamar o bind no construtor
    ctx.addInitializer(function(this: any){
        this[ctx.name] = this[ctx.name].bind(this);
    })

    //* Assim, é possivel preservar a função original do codigo
    return function(this: any){
        console.log("Executando função original")
        //* Semelhante a bind, mas ele guarda imediatamente o q contem e pode ser sobreescrito
        target.apply(this);
    }
}

//? Decorador de Campo
//* Nessa caso, target sera idefinidao pois sera executado antes q o codigo seja inicializado
function fieldLogger(target: undefined, ctx: ClassFieldDecoratorContext){
    console.log(target);
    console.log(ctx);

    return (initialValue: any) => {
        console.log(initialValue)
        return '';
    }
}

function replacer<T>(initValue : T){
return function replaceDecorator(target: undefined, ctx: ClassFieldDecoratorContext){
    console.log(target);
    console.log(ctx);

    return (initialValue: any) => {
        console.log(initialValue)
        return '';
    }
}
}

@logger
class Person{
    //@fieldLogger
    @replacer('')
    name = "Guilherme";

    constructor(){
        //* Bind é uma função que permite que o this seja permanente
        this.greet = this.greet.bind(this);
    }
    
    @autobind
    greet() {
        console.log("Oi meu nome é " + this.name);
    }
}

const guinas = new Person();
const greet = guinas.greet;
greet();