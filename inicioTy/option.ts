//* Voce pode usar ? para poder deixar que um parametro possa ser nulo
function errorMesssage(msg? : string)
{
    throw new Error(msg)
}

type user ={
    name: string,
    age: number,
    //* Voce pode usar na type
    role?: string[];
}

let input = "";
//* || verifica se o valor eh nulo, indefinido, zero ou string vazia
//* Melhor que usa ?? pois caso seja zero ou string vazia, vai retornar input envez de false
const valor = input || false;