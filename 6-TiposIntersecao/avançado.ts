type DataStore = {
    // Index signature: permite qualquer chave do tipo string
    // [prop: tipo_da_chave]: tipo_do_valor
    [prop: string]: number | boolean
};

let store: DataStore = {}

//* Eh igual a [prop: string]: number | boolean
let someObj: Record<string, number | boolean>

//* Gracas ao prop, voce pode ir criando atributos de chave string
store.id = 5;
store.isOpen = false;

//* As const eh uma funcao que torna os valores SUPER RESTRITOS 
let role = ['admin', 'guest', 'editor'] as const;

const dataEntries = {
    entry1: 0.51,
    entry2: 0.75, 
    //Satisfies apenas valida o codigo
} satisfies Record<string, number>;