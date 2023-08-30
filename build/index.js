"use strict";
// // type heroi = {
// //   name: string;
// //   vulgo: string;
// // }
// // function printaObj(pessoa: heroi) {
// //   console.log(pessoa);
// // }
// // printaObj({
// //   name:"Ednaldo",
// //   vulgo: "Ednaldo Pereira"
// // });
// let ligado: boolean = true;
// let nome: string = "Ednaldo Pereira";
// let idade: number = 77;
// function executaQuery(): void {
//   console.log("retorna vazio");
// }
// let produto: object = {
//   name: "evandro",
//   idade: 25,
// };
// type Pokemon = {
//   nome: string;
//   level: number;
// };
// let pokemon1: Pokemon = {
//   nome: "pikachu",
//   level: 12,
// };
// let dados: string[] = ["evandro", "mariano"];
// let dados2: Array<string> = ["ednaldo", "pereira"];
// // variáveis mult types
// let dados3: (string | number)[] = ["Evandro", 25];
// let dados4: (string | number) = 25;
// console.log(ligado);
// tuplas
// let boleto:[string, number, number] = ["conta de internet", 109.99, 123456];
// datas
// let aniversario:Date = new Date("2023-02-04 05:00");
// console.log(aniversario.toString());
// funções
// function soma(x:number, y:number):number{
//   return x + y;
// }
// let result:number = soma(10,12);
// console.log(result);
class Character {
    constructor(name, strengh, skill) {
        this.name = name;
        this.strength = strengh;
        this.skill = skill;
    }
}
const p1 = new Character("Ordnave", 77, 88);
console.log(p1);
