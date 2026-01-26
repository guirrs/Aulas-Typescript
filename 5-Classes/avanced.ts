class UserAdv {
    constructor(protected _firstName : string, protected _lastName: string){}

    //* set eh usado para validoções
    set firstName(name : string){
        if(name.trim() === ''){
            throw new Error('Nome Invalido');
        }
        this._firstName = name;
    }
    set lastName(name : string){
        if(name.trim() === ''){
            throw new Error('Nome Invalido');
        }
        this._lastName = name;
    }
    
    //* Eh uma propriedade que sem () que pode ser usada para funcoes rapidas
    get fullName() {
        return this.firstName + '' + this.lastName;
    }
    static eID = 'User'

    static greet() : void{
        console.log("Hello");
    };
}

//* extends permite herdar uma classe
class Employee extends UserAdv{
    constructor(firstName: string, lastName: string, public jobTitle: string){
        //* eh necessario o super() para pegar a herança da pai
        super(firstName, lastName);
    }

    work(){
        console.log(this.fullName);
    }
}

abstract class UiElement{
    constructor(public identifier: string){
    }
    clone(targetLocation: String){  
        console.log('Clonado');
    };
}

class SideDrawerElement extends UiElement{
    constructor(public identifier: string, public position: 'direita' | 'esquerda'){
        super(identifier)
    }
}

//* Interface eh excluisivo do TS, portanto, quando compilado, não tera script em JS
interface Iauthenticable{
    email: string;
    password: string;

    login(): void;
    logout(): void;
}

interface Iauthenticable{
    role: string;
}

//* Interface pode herdar de outra interface
interface IauthenticableAdmin extends Iauthenticable{
    role: "admin" | "superAdmin";
}

//* Quando voce cria uma outra interface com o mesmo nome no TS, ele mescla as duas, isso eh util quando voce quer modificar uma interface de outro arquivo ou de outra biblioteca

let User : Iauthenticable = {
    email: "email@gmail.com",
    password: "1234",

    login() {
        //* Credenciais
    },

    logout(){
        //* Saida
    },

    role: "Comum"
}

class AuthenticableUser implements Iauthenticable{
    constructor(public Username : string, public password : string, public email : string, public passaword : string){}

    login(): void {
        
    }

    logout(): void {
        
    }
    role = "";
}