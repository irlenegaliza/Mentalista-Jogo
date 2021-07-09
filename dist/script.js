var numSorteio = parseInt(Math.random() * 10);
var tentativas = 3;

while (tentativas > 0){
  var advinhaNum = parseInt(prompt("Tente advinhar o número que está oculto de 0 a 10?"));

  if(advinhaNum == numSorteio){
     alert("Acertaste")
    break
  }
  else if (advinhaNum < numSorteio) {
    alert("O número secreto é maior");
    tentativas = tentativas - 1
  }
  else if (advinhaNum > numSorteio){
    alert("O número secreto é menor")
    tentativas = tentativas - 1
  }
}
if (numSorteio != advinhaNum){
  alert("És péssimo. O número secreto era " + numSorteio)
}
 /* Conteúdo detalhado dessa aula
1-Realizar o fork do projeto com template inicial;
2-Fazer testes utilizando console.log();
3-Criar a lógica por trás do "chute" com if, else if e else;
4-Criar a lógica para controlar a quantidade de tentativas com while;
5-Utilizar a função Math.random() do JavaScript para criar números aleatórios;
6-Praticar o uso em conjunto de condicionais e loops, e refletir sobre em que momento cada trecho de código é executado.

// Desafios da aula
1-Modifique o cenário do mentalista e adicione mecanismos de chances, pontos e etc!
2-O comando break pode ser substituído para que o código saia do while sem ele. Você consegue pensar em uma alternativa?
3-Alterar o math.random() para funcionar com outros intervalos entre números.*/

/*MENTALISTA E NÚMEROS ALEATÓRIOS
PARTICIPE E VÁ MAIS FUNDO
Nesta terceira aula da Imersão Dev, vamos criar uma jogo de adivinhação, onde o programa escolhe um número aleatório e nós vamos tentar acertar. O projeto inicial se encontra no link abaixo:

https://codepen.io/imersao-dev/pen/c9bc2321ec180ad7483501ad8a1e7d3d

Não se esqueça de fazer o fork desse projeto para a sua conta, e de marcar a hashtag da #imersaodev e #alura.

Nesta aula, enquanto escrevemos nosso programa vamos aprender mais ferramentas de lógica de programação, que podem ser utilizadas juntas e que permitem que nossos programas sigam por diversos caminhos, de acordo com as informações e dados recebidos.

*Conteúdo detalhado dessa aula
Realizar o fork do projeto com template inicial;
Fazer testes utilizando console.log();
Criar a lógica por trás do "chute" com if, else if e else;
Criar a lógica para controlar a quantidade de tentativas com while;
Utilizar a função Math.random() do JavaScript para criar números aleatórios;
Praticar o uso em conjunto de condicionais e loops, e refletir sobre em que momento cada trecho de código é executado.

*Desafios dessa aula!
Modifique o cenário do mentalista e adicione mecanismos de chances, pontos e etc!
O comando break pode ser substituído para que o código saia do while sem ele. Você consegue pensar em uma alternativa?
Alterar o math.random() para funcionar com outros intervalos entre números.

*Links importantes para você acompanhar a aula
Repositório do código final da aula 2 (https://codepen.io/imersao-dev/pen/ExZYmWP)

*Conteúdos extras:
while no MDN (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while)

Math.random() no MDN (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

*Como compartilhar seu CodePen:
Clique na opção Settings no canto superior direito;
Selecione a opção Pen Details (Detalhes);
No campo Pen Title você pode dar o nome do seu projeto;
No campo Pen Description, você pode dar detalhes sobre o projeto (o que ele faz, qual objetivo do projeto);
Para compartilhar seu projeto, no campo Tags, você pode adicionar #imersaodev,#alura
Agora só salvar seu projeto e compartilhar o link marcando a Alura nas redes sociais!*/