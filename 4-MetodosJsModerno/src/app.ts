//* Valores padroes em TS  não pode ser o primeiro argumento, sempre do segundo em diante
const add = (a: number, b: number = 1): number => a+b;

const printOutput = (a: number | string) => console.log(a);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
    }

printOutput(add(5));

//* Operador ...

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

//* ... adiciona todos os elementos de um array em outro
activeHobbies.push(...hobbies);

const person = { name: 'Max', age: 30 };

//* ... adiciona todas as propriedades de um objeto em outro
const copiedPerson = { ...person };

console.log(activeHobbies);
console.log(copiedPerson);

//* Voce pode expecificar dentro do operador a quantidade de argumentos que voce quer receber ou deixar vazio para receber quantos quiser
const add2 = (...numbers: number[]): number => {
    //* reduce pega todos os valores do array e reduz a um unico valor
    //* curResult é o valor acumulado, curValue é o valor atual e o 0 é o valor inicial
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add2(5, 10, 2, 3.7);
console.log(addedNumbers);

//* Destructuring (array e objeto) h1, h2 recebe os dois primeiros valores do array hobbies e remainingHobbies recebe o restante dos valores
const [h1, h2, ...remainingHobbies] = hobbies;
console.log(h1, h2);
console.log(remainingHobbies);

//* //* [] desestrutura o array enquanto {} desestrutura objetos
const {name, age} = person; 

console.log(name, age, person)