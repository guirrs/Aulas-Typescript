//? tsc -- init cria um compilador
//* Com o compilador criado, não use tsc (direção de pasta), pois isso vai tirar as config do compilador, por isso, somente use tsc
import fs from 'node:fs';
function add(a: any, b: any)
{
    return a + b;
}

console.log(add(2,3));

//? tsc --watch, poe em modo de atualização constante, auxiliando quem coda com frequencia
//? npm init cria um arquivo json que permite o uso do node e p uso de importações, nele adicione, type:"module"

//! Pacotes para usar importações
//? npm install --save-dev @types/node
//? npm install --save-dev @types/lodash
//? npm install --save-dev @types/express
//? npm install --save-dev @types/react