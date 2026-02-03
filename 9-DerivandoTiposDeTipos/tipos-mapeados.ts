type Operations = {
    readonly add: (a: number, b: number) => number;
    readonly subtract: (a: number, b: number) => number;
}

//* Esse tipo  garante que Operations e mathResults tenham exatamente as mesmas chaves, promoendo a reutilização e segurança
type Results<T> = {
    //* Como results verifca os valores, usando ? permite que nem todos os metodos precisam ser usados para o tipo, no exemplo, podendo só usar add sem dar erro
    //* -readonly, diz ao typescript q vc quer remover os readonly
    -readonly [key in keyof T]?: number;
}

let mathOperations: Operations = {
    add(a: number, b: number){
        return a + b;
    },

    subtract(a: number, b: number){
        return a-b;
    }
}

let mathResults : Results<Operations> = {
    add : mathOperations.add(1,5),
    subtract : mathOperations.subtract(10,3),
};