"use strict";
class UserAdv {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    //* set eh usado para validoções
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Nome Invalido');
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Nome Invalido');
        }
        this._lastName = name;
    }
    //* Eh uma propriedade que sem () que pode ser usada para funcoes rapidas
    get fullName() {
        return this.firstName + '' + this.lastName;
    }
    static greet() {
        console.log("Hello");
    }
    ;
}
UserAdv.eID = 'User';
//* extends permite herdar uma classe
class Employee extends UserAdv {
    constructor(firstName, lastName, jobTitle) {
        //* eh necessario o super() para pegar a herança da pai
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    work() {
        console.log(this.fullName);
    }
}
class UiElement {
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
        console.log('Clonado');
    }
    ;
}
class SideDrawerElement extends UiElement {
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
//* Quando voce cria uma outra interface com o mesmo nome no TS, ele mescla as duas, isso eh util quando voce quer modificar uma interface de outro arquivo ou de outra biblioteca
let User = {
    email: "email@gmail.com",
    password: "1234",
    login() {
        //* Credenciais
    },
    logout() {
        //* Saida
    },
    role: "Comum"
};
class AuthenticableUser {
    constructor(Username, password, email, passaword) {
        this.Username = Username;
        this.password = password;
        this.email = email;
        this.passaword = passaword;
        this.role = "";
    }
    login() {
    }
    logout() {
    }
}
