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
    console.log(target);
    console.log(ctx);
}

@logger
class Person{
    name = "Guilherme";
    
    @autobind
    greet() {
        console.log("Oi meu nome é " + this.name)
    }
}

const guinas = new Person();
const cinthia = new Person();