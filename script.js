const totalNumeros = 90;
const tamanhoCartela = 25;
let poolNumeros = [];
let numerosSorteados = [];
let numerosCartela = [];
let jogoAtivo = true;

function initGame() {
  poolNumeros = [];
  numerosSorteados = [];
  numerosCartela = [];
  jogoAtivo = true;

  for (let i = 1; i <= totalNumeros; i++) {
    poolNumeros.push(i);
  }

  const copiaPool = [...poolNumeros];
  shuffle(copiaPool);
  numerosCartela = copiaPool.slice(0, tamanhoCartela);

  renderCartela();
  document.getElementById("drawnNumber").innerText = "Número Sorteado: -";
  document.getElementById("message").innerText = "";
  document.getElementById("drawBtn").disabled = false;
  document.getElementById("restartBtn").style.display = "none";
  updateCounters();
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderCartela() {
  const bingoBoard = document.getElementById("bingoBoard");
  bingoBoard.innerHTML = "";
  numerosCartela.forEach(num => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerText = num;
    cell.dataset.numero = num;
    cell.addEventListener("click", () => {
      if (!jogoAtivo) return;
      if (numerosSorteados.includes(Number(cell.dataset.numero)) && !cell.classList.contains("marked")) {
        cell.classList.add("marked");
        verificarVitoria();
        updateCounters();
      }
    });
    bingoBoard.appendChild(cell);
  });
}

function sortearNumero() {
  if (!jogoAtivo) return;

  const indice = Math.floor(Math.random() * poolNumeros.length);
  const numeroSorteado = poolNumeros.splice(indice, 1)[0];
  numerosSorteados.push(numeroSorteado);
  document.getElementById("drawnNumber").innerText = "Número Sorteado: " + numeroSorteado;
  document.querySelectorAll(".cell").forEach(cell => {
    if (Number(cell.dataset.numero) === numeroSorteado) {
      cell.classList.add("highlight");
      setTimeout(() => { cell.classList.remove("highlight"); }, 1000);
    }
  });
  updateCounters();
}

function updateCounters() {
  document.getElementById("sorteadosCount").innerText = numerosSorteados.length;
  document.getElementById("restantesCount").innerText = totalNumeros - numerosSorteados.length;
  const markedCount = document.querySelectorAll(".cell.marked").length;
  document.getElementById("acertadosCount").innerText = markedCount;
  document.getElementById("aAcertarCount").innerText = tamanhoCartela - markedCount;
}

document.getElementById("drawBtn").addEventListener("click", sortearNumero);
document.getElementById("restartBtn").addEventListener("click", initGame);
initGame();