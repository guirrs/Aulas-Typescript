type AppUser = {
    name: string,
    age: number,
    permissions: {
        id: string,
        title: string,
        description: string
    }[]
}

//* objeto['atributo'] permite voce pegar um atributo do objeto
type permissions = AppUser['permissions'];
//* objeto[number] permite pegar todos os valores do array
type permission = permissions[number];

type Names = string[];
type Name = Names[number];