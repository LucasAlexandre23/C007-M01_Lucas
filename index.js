console.log('Boa noite, essa é a 2ª Delegacia de Homicídios do RN')
console.log()
console.log('Adailton da Cunha, o senhor está sendo investigado por suspeita de homicídio')
console.log()
console.log('Seu caso será analisado pelo delegado Lucas Alexandre')
console.log()
console.log('Você jura dizer apenas a verdade, e tem ciência de que toda mentira, pode ser punível pela justiça?')
console.log()
console.log('Adailton: Sim, estou ciente.')
console.log()
console.log('Nesse caso, iremos iniciar o interrogatório.')
console.log()
cont = 0
x = 0
sim = 0

let pergunta1 = prompt('Você telefonou para vitima no dia de seu assasinato?: SIM ou NAO?').toUpperCase()
let pergunta2 = prompt('Você esteve no local do crime, nos últimos 3 dias?: SIM ou NAO?').toUpperCase()
let pergunta3 = prompt('Você reside próximo a vítima?: SIM ou NAO?').toUpperCase()
let pergunta4 = prompt('Você devia para a vitima?: SIM ou NAO?').toUpperCase()
let pergunta5 = prompt('Você já trabalhou com a vítima?: SIM ou NAO?').toUpperCase()

if (pergunta1 == 'SIM'){
cont = cont + 1}
if (pergunta2 == 'SIM'){
cont = cont + 1}
if (pergunta3 == 'SIM'){
cont = cont + 1}
if (pergunta4 == 'SIM'){
cont = cont + 1}
if (pergunta5 == 'SIM'){
cont = cont + 1}


if (cont == 5){
  console.log('Você está preso!! (ASSASINO)')}
if (cont >= 3 && cont <=4){
  console.log('Você participou do assasinato!! (CUMPLICE)')}
if (cont == 2){
  console.log('Tudo bem Adailton, poderei te chamar para depôr mais uma vez no decorrer da investigação. (SUSPEITO)')}
if (cont <= 1){
  console.log('Agradeço pelo depoimento, você está liberado. (INOCENTE)')}