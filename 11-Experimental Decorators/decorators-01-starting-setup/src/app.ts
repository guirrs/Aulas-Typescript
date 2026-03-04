//* Não esquecer de habilitar o ExperiementalDecorators

//* Todo decorador de classe, recebe um construtor como primeiro argumento, por isso é sempre necessario criar um construtor
function Logger(constructor: Function){
    console.log("Logging");
    console.log(constructor);
}

//* Quando voce poe um valor a retornar, diferente do normal, voce pode por () ao chamar o decorador, podendo adicionar valores para serem executados na logger
function Logger2(LogString: string) {
    return function (constructor: Function) {
        console.log(LogString);
        console.log(constructor);
    }
}


@Logger2('Logging - Pessoa')
class Person {
    name = "Guinas";

    constructor() {
        console.log("Criando objeto pessoa");
    }
};

const pers = new Person();

console.log(pers);



function WithTemplate(templete: string, hookId: string) {
    //* Foi posta um _ pois esse elemento é essencial, mas não precisa dele
    return function (constructor: any) {
        console.log("Rederizando Template");
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = templete;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

function WithTemplate2(templete: string, hookId: string) {
    //* Foi posta um _ pois esse elemento é essencial, mas não precisa dele
    //? Para retornar a classe, é necessario iniciar uma type
    return function<T extends {new(...args: any[]) : {name: string}}> 
    (originalConstructor: T) {
        //* Voce tambem pode retornar com uma classe, adicionando conteudo na classe criada
        return class extends originalConstructor {
            constructor(..._: any[]) {
                //* super() para pegar o conteudo do construtor
                super();
                console.log("Rederizando Template");
                const hookEl = document.getElementById(hookId);
                //*Agora não precisa iniciar um novo construtor, agr pode usar o da classe
                if (hookEl) {
                    hookEl.innerHTML = templete;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

//* É possivel usar 2 comparadores em um mesmo objeto
//* Os decoradores sera executados em ordem de cima para baixo(Para decoradores reais) ou baixo para cima(Para decoradores de fabrica)
@Logger2("Logging")
//@WithTemplate('<h1>Meu objeto pessoa</h1>', 'app')
//* Com o decorador, podemos adicionar conteudos de uma classe não quando é iniciada, mas sim quando ela é instanciada, adicionando uma lógica em um classe antes mesma de cria-la
@WithTemplate2('<h1>Meu objeto pessoa</h1>', 'app')
class Person2 {
    name = "Guinas";

    constructor() {
        console.log("Criando objeto pessoa");
    }
};

const pers2 = new Person2();

console.log(pers2);

// ---

function Log(target: any, propertyName: string | Symbol) {
    console.log("Propriedade decoradora.");
    console.log(target, propertyName)
}

function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log("acessando decorador");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log("metodo decorador");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string, position: number) {
    console.log("metodo decorador");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val
        }
        else {
            throw new Error("Prco invalido, ele deve ser positivo");
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}

//? INPUT VALUES

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor : PropertyDescriptor = {
        configurable: true,
        enumerable: false,

        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

class Printer{
    message = "Esta funcionando";

    @Autobind
    showMessage(){
        console.log(this.message);
    }
}

const p = new Printer;

const button = document.querySelector('button')!;
button?.addEventListener('click', p.showMessage);

interface ValidatorConfig{
    [property: string]: {
        [ValidatebleProp: string] : string[] // ['required', 'positive']
    }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName] : ['required']
    }
}

function PositiveNumber(target: any, propName: string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName] : ['positive']
    }
} 

function Validate(obj: any){
    const objValidatorConfig = registeredValidators[obj.constructor.name]
    if(!objValidatorConfig){
        return true
    }
    let isValid = true;
    for(const prop in objValidatorConfig){
        for(const validator of objValidatorConfig[prop]){
            switch (validator){
                case 'required':
                    //* !! transforma todo o valor em booleana
                    isValid = isValid &&  !!obj[prop];
                    break;
                case 'positive' :
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course{
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number){
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    //* + converte o valor em numero
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);
    if(!Validate(createdCourse)){
        alert('Valor invalido, tente novavemente');
    }
    console.log(createdCourse);
})