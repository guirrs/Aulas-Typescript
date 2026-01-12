//* enum eh uma ferramenta excluiva do TS, ela permite que voce limite os valores de uma variavel, nesse caso, cargo so pode ser admin, editor e cliente;
var Cargo;
(function (Cargo) {
    Cargo[Cargo["admin"] = 0] = "admin";
    Cargo[Cargo["editor"] = 1] = "editor";
    Cargo[Cargo["cliente"] = 2] = "cliente";
})(Cargo || (Cargo = {}));
//* Pode chama-la dessa forma
var user1Cargo = Cargo.cliente;
//* Ou pela ordem da array
var user2Cargo = 2;


