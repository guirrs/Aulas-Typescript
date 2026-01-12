const inputEl = document.getElementById("user-name")!; // o ! impede que o valor seja nulo, cuidado ao usar, pois isso indica ao TS que se for nulo, essa variavel não sera usada

console.log(inputEl!.value); // O ! diz que so mostrara no console caso n seja nulo

console.log(inputEl?.value);// o ? verifica de o valor existe, retornando caso seja nulo, caso não for, executara a ação

//* Voce pode por as no final para indicar o q vai ser recebido
const exemEl = document.getElementById("user-age") as HTMLElement | null;