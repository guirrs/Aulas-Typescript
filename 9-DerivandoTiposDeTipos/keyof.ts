//* O keyof pega um atributo especifico do objeto
function getProp<T extends object, U extends keyof T>(obj: T, key: U){
    const val = obj[key];

    if( val === undefined || val === null){
        throw new Error('Acessando valor nulo ou indefinido')
    }

    return val
}

//* A diferença do keyof do typeof, é que o keyof pega um atributo especifico e o typeof todo o objeto
const data = {id: 1, isStored: false, values: [1,4,5,7]}
const isStored = getProp(data, 'isStored');

