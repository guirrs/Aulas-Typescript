type StringArray = string[];
// type ElementType<T extends any[]> = T[number];

// type Element1 = ElementType<StringArray>;

// const text = 'Ola jovem';

// type Element2 = ElementType<text>;

//* Condicional
//* Nesse impediamos q GetElement seja um numero
type GetElementType<T> = T extends any[] ? T[number] : never;
type exemple1 = GetElementType<StringArray>;
type exemple2 = GetElementType<2>

type FullNamePerson = {firstName: string , lastName: string}
type FullNameOrNothing<T> = T extends FullNamePerson ? string :never

function getFullName<T extends object>(person: T) : FullNameOrNothing<T>{
    if ('firstName' in person && 'lastName' in person && person.firstName && person.lastName) {
        return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>;
    }
    throw new Error('Sem primeiro nome e/ou sobrenome');
}

const name1 = getFullName({});
const name2 = getFullName({firstName: "Guilherme", lastName: "Ribeiro"});