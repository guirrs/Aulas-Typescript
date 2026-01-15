"use strict";
function calcularInvestimento(data) {
    const { valorInicial, juros, valorEsperado, duracao } = data;
    if (valorInicial < 0)
        return "O valor inicial tem que ser maior que 0";
    if (duracao <= 0)
        return "A druação do investimento não pode ser 0 ou menos";
    if (valorEsperado <= 0)
        return "Valor esperado deve ser maior q 0";
    let total = valorInicial;
    let totalContribuido = 0;
    let jurosTotaisGanhos = 0;
    const resultadoAnuais = [];
    for (let i = 0; i < duracao; i++) {
        total *= (1 + valorEsperado); // 0.08
        jurosTotaisGanhos = total - valorInicial - totalContribuido;
        totalContribuido += juros;
        total += juros;
        resultadoAnuais.push({
            ano: `Ano ${i + 1}`,
            montante: total,
            jurosTotaisGanhos,
            totalContribuido
        });
    }
    return resultadoAnuais;
}
function printResultado(resultado) {
    if (typeof resultado === 'string') {
        console.log(resultado);
        return;
    }
    //? const ... of ... eh como se fosse o foreach do C#
    for (const yearEndResults of resultado) {
        console.log(yearEndResults.ano);
        console.log(`Total: ${yearEndResults.montante.toFixed(0)}`);
        console.log(`Total Contribuido: ${yearEndResults.totalContribuido.toFixed(0)}`);
        console.log(`Juros totais: ${yearEndResults.jurosTotaisGanhos.toFixed(0)}`);
        console.log("------------------------------------------------------------------");
    }
}
const investimento = {
    valorInicial: 2000,
    juros: 500,
    valorEsperado: 0.08,
    duracao: 10
};
const resultado = calcularInvestimento(investimento);
printResultado(resultado);
