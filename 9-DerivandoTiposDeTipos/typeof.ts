const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['John', 'Max']
}

//* Voce pode usar o typeof para pegar os atributos dentro do objeto e variavel
type Settings = typeof settings;

//* Ou voce pode por o typeof direto no codigo
function LoadData (s: typeof settings){

}

LoadData(settings);