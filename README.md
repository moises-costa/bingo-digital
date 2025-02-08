# Bingo Digital

> **Bingo Digital** é um jogo interativo de bingo, desenvolvido com HTML, CSS e JavaScript, que traz o tradicional jogo para um ambiente digital moderno e minimalista.

## Descrição

No **Bingo Digital**, você possui uma cartela com 25 números aleatórios (de 1 a 90). A cada clique no botão **"Sortear Número"**, um número é sorteado e exibido na tela. Se o número sorteado estiver presente na sua cartela, basta clicar sobre ele para marcá-lo. O jogo acompanha, em tempo real, as estatísticas dos números sorteados e acertados, exibindo:

- **Números sorteados** e **números restantes para sorteio**.
- **Números acertados** e **números restantes para serem marcados**.

Ao completar sua cartela, o jogo finaliza automaticamente com uma mensagem de vitória; se esgotarem os números para sorteio sem que a cartela seja completa, uma mensagem de "Game Over" será exibida.

## Recursos

- **Cartela dinâmica:** 25 números aleatórios (de 1 a 90) dispostos em uma grade 5x5.
- **Sorteio aleatório:** Cada clique em "Sortear Número" remove um número do pool e o exibe.
- **Destaque visual:** Se o número sorteado estiver na sua cartela, ele recebe um efeito de destaque (highlight) para facilitar a identificação.
- **Estatísticas em tempo real:** Exibição dos números sorteados, restantes, acertados e a marcar.
- **Interface minimalista e responsiva:** Tema escuro com design clean e moderno.
- **Mensagens de fim de jogo:** Exibição automática de mensagem de vitória ou "Game Over" e opção de reiniciar o jogo.

## Como Jogar

1. **Clone ou baixe o repositório.**
2. **Abra o arquivo `index.html` no seu navegador.**
3. Clique no botão **"Sortear Número"** para iniciar o sorteio.
4. Se o número sorteado estiver na sua cartela, clique sobre ele para marcá-lo.
5. Acompanhe as estatísticas exibidas na tela.
6. Ao completar sua cartela, o jogo exibirá uma mensagem de vitória e desabilitará novos sorteios.
7. Caso os números se esgotem sem a cartela estar completa, uma mensagem de "Game Over" aparecerá.
8. Para jogar novamente, clique no botão **"Reiniciar"**.

## Estrutura do Projeto

```plaintext
Bingo-Digital/
├── index.html       # Estrutura principal do jogo
├── style.css        # Estilos e layout da interface
├── script.js        # Lógica e funcionalidades do jogo
└── README.md        # Este arquivo
