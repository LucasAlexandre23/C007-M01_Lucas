console.log()
console.log()
console.log('Olá, você está em um duelo mortal com um Monstro chamado Anubis, pronto para duelar?')
const hp = +prompt('Digite a quantidade de vida do monstro entre 10 e 50: ');
const atack = +prompt('Digite o valor de ataque do jogador (Entre 5 e 10): ');
const turnos = Math.ceil(hp / atack);
console.log(`O jogador irá precisar de ${turnos} para derrotar o monstro.`);