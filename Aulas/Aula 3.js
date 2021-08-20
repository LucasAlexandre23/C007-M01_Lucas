// // Declarando uma variavel let, com o nome saudacao, e definindo o valor como "Bom dia!"
// let saudacao = "Bom dia! "

// let nome = prompt("Digite seu nome: ")

// let saudacaoCompleta = saudacao+saudacao+saudacao+nome+"! Seja bem vindo(a)!"

// console.log(saudacaoCompleta)


// let numero1 = 10;
// let numero2 = 15;
// console.log(typeof(numero1));
// console.log();

// console.log(numero1+numero2)

//// Recebendo números nbo prompt: coloco +prompt

// let numero3 = +prompt("Digite um número: ");
// let numero4 = +prompt("Digite outro número: ");

// console.log(typeof(numero3));
// console.log(numero3+numero4);
// console.log();

// // Convertendo uma string em number
// let num3 = prompt("Digite um número: ");
// let num4 = prompt("Digite outro número: ");

// num3 = Number(num3);
// num4 = Number(num4);
// console.log(num3+num4);

// let num3conv = Number(num3);
// let num4conv = Number(num4);
// console.log(typeof(num3conv));
// console.log(num3conv+numero4conv);


let numero3 = +prompt("Digite um número: ");
let numero4 = +prompt("Digite outro número: ");
console.log(typeof(numero3));
console.log()

let numero3str = numero3.toString();
let numero4str = numero4.toString();
console.log(typeof(numero3str));
console.log(numero3str+numero4str);

// // Ele está convertendo apenas o numero4, mas quando somamos um número e uma string, ele converte tudo para string
let soma = numero3+numero4.toString();
console.log(soma)

///////////////////////////////////////////////////////

// let numero = +prompt("Digite um número: ");

// if (numero > 20){
//   console.log("O número é maior que 20")
// } else if (numero <20){
//   console.log("O número é menor que 20")
// } else {
//   console.log("O número é 20!!")
// }

// let cidade = prompt("De onde você é?? ")

// if (cidade === "Londrina"){
//   console.log("Parabéns!!! Você mora na melhor cidade do sul da galáxia!")
// } else {
//   console.log("Que pena, mas espero que sua cidade também seja legal.")
// }


// Escreva um programa que receba o ano de nascimento do usuário, e apresente na tela se ele é maior ou menor de idade

// let ano = +prompt("Em que ano você nasceu? ");

// let idade = 2021-ano;

// if (idade >= 18){
//   console.log("Você é maior de idade!")
// } else {
//   console.log("Você é menor de idade!")
// }


////Testando duas condições ao mesmo tempo

let usuario = "Admin";
let senha = "Blue123"

let entradauser = prompt("Digite o usuario: ");
let entradasenha = prompt("Digite a senha: ");

if (entradauser === usuario && entradasenha === senha){
  console.log("Acesso autorizado!")
} else {
  console.log("Acesso negado!")
}

////////////////////


// let numero = +prompt("Digite um número: ");

// if (numero > 20){
//   console.log("O número é maior que 20")
// } else if (numero <20){
//   console.log("O número é menor que 20")
// } else {
//   console.log("O número é 20!!")
// }

// let cidade = prompt("De onde você é?? ")

// if (cidade === "Londrina"){
//   console.log("Parabéns!!! Você mora na melhor cidade do sul da galáxia!")
// } else {
//   console.log("Que pena, mas espero que sua cidade também seja legal.")
// }


// Escreva um programa que receba o ano de nascimento do usuário, e apresente na tela se ele é maior ou menor de idade

// let ano = +prompt("Em que ano você nasceu? ");

// let idade = 2021-ano;

// if (idade >= 18){
//   console.log("Você é maior de idade!")
// } else {
//   console.log("Você é menor de idade!")
// }


////Testando duas condições ao mesmo tempo

let usuario = "Admin";
let senha = "Blue123"

let entradauser = prompt("Digite o usuario: ");
let entradasenha = prompt("Digite a senha: ");

if (entradauser === usuario & entradasenha === senha){
  console.log("Acesso autorizado!")
} else {
  console.log("Acesso negado!")
}