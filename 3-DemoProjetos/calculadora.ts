type Investimento = {
    valorInicial: number,
    ContribuicaoMensal: number,
    taxaEsperada: number,
    duracao: number
}

type ResultadoInvestimento = {
    ano: string,
    montante: number,
    totalContribuido: number,
    jurosTotaisGanhos: number 
}

//* String tambem pois se caso houver um erro, o mesmo vai retorna como string
type ResultadoCalculo = ResultadoInvestimento[] | string
function calcularInvestimento(data: Investimento): ResultadoCalculo
{
    const {valorInicial, ContribuicaoMensal: juros,taxaEsperada, duracao} = data;
    if(valorInicial < 0)
        return "O valor inicial tem que ser maior que 0"
    if(duracao <= 0)
        return "A druação do investimento não pode ser 0 ou menos"
    if(taxaEsperada <= 0)
        return "Valor esperado deve ser maior q 0"

    let total = valorInicial;
    let totalContribuido = 0;
    let jurosTotaisGanhos = 0;

    const resultadoAnuais : ResultadoInvestimento[] = [];

    for(let i = 0; i < duracao; i++)
    {
        total *= (1+taxaEsperada); // 0.08
        jurosTotaisGanhos = total - valorInicial - totalContribuido;
        totalContribuido += juros;
        total += juros

        resultadoAnuais.push({
            ano: `Ano ${i+ 1}`,
            montante: total,
            jurosTotaisGanhos,
            totalContribuido
        });
    }
    return resultadoAnuais;
}

function printResultado(resultado: ResultadoCalculo) {
    if(typeof resultado === 'string')
    {
        console.log(resultado);
        return;
    }
    //? const ... of ... eh como se fosse o foreach do C#
    for(const yearEndResults of resultado){
        console.log(yearEndResults.ano);
        //* To fixed serve para definir a quantidade de casas decimais
        console.log(`Total: ${yearEndResults.montante.toFixed(0)}`);
        console.log(`Total Contribuido: ${yearEndResults.totalContribuido.toFixed(0)}`);
        console.log(`Juros totais: ${yearEndResults.jurosTotaisGanhos.toFixed(0)}`);
        console.log("------------------------------------------------------------------")
    }
}

const investimento : Investimento =
{
    valorInicial: 2000,
    ContribuicaoMensal: 500,
    taxaEsperada: 0.08,
    duracao: 10
}

const resultado = calcularInvestimento(investimento);

printResultado(resultado);