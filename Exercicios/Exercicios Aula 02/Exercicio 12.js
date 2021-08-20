console.log('Olá, bem vindo a calculadora de reajuste')
console.log('Nosso objetivo é informa-lo o novo valor de seu aluguel com o reajuste IGPM, siga as orientações!')
aluguel = +prompt('Digite o valor do aluguel: ')
percentual = prompt('Digite o percentual do ajuste')/100+1
valor = aluguel*percentual
console.log('O seu novo valor de aluguel será: R$'+valor)