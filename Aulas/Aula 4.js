/// + antes do prompt serve para transformar em INT
/// O que é const? é uma variavel que nunca será alterado, ou seja, não pode ser substituido
/// Função Match.ceil = Serve para arreondar um número INT
/// Função ` $ (Crase e cifão serve para inserir uma variável dentro de outra variável)
/// RESPOSTA PERGUNTA 6
console.log()
console.log()
console.log('Olá, você está em um duelo mortal com um Monstro chamado Anubis, pronto para duelar?')
const hp = +prompt('Digite a quantidade de vida do monstro entre 10 e 50: ');
const atack = +prompt('Digite o valor de ataque do jogador (Entre 5 e 10): ');
const turnos = Math.ceil(hp / atack);
console.log(`O jogador irá precisar de ${turnos} para derrotar o monstro.`);

