//* TS ele agrupa as funções, nesse caso eu defini que todo valor string retorna string e any um numero, sem deixar pontas soltas
function getLegth(val: string): string;
function getLegth(val: any[]): number;
function getLegth(val: string | any[]){
    if(typeof val === 'string'){
        //* split() ele divide de acordo com oq esta dentro do parametro da string, nessa caso como eh ' ', vai cortar o espacamento
        //* Exemplo: Oi tudo bem = "Oi" "tudo" "bem"
        const numberOfWords = val.split(' ').length;
        return `${numberOfWords} words`;
    }
    return val.length
}