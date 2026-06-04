const caixa = document.querySelector("#caixa");
const btn = document.querySelector("#btn");
const toggle = document.querySelector("#toggle");

let corAtual = "blue";
let visivel = true;

// 1. Clique no botão → muda a cor da caixa
btn.addEventListener("click", () => {
  caixa.style.background = "red";
});

// 2. Mouse entra → aumenta tamanho + borda
caixa.addEventListener("mouseover", () => {
  caixa.style.width = "250px";
  caixa.style.height = "250px";
  caixa.style.border = "5px solid yellow";
});

// 3. Mouse sai → volta ao normal
caixa.addEventListener("mouseout", () => {
  caixa.style.width = "200px";
  caixa.style.height = "200px";
  caixa.style.border = "none";
});

// 4. Clique na caixa → alternar cores
caixa.addEventListener("click", () => {
  if (corAtual === "blue") {
    caixa.style.background = "green";
    corAtual = "green";
  } else {
    caixa.style.background = "blue";
    corAtual = "blue";
  }

  // Extra: mostrar texto
  caixa.textContent = "Clicou!";
});

// EXTRA: cor aleatória ao clicar no botão
btn.addEventListener("click", () => {
  const cores = ["red", "green", "purple", "orange", "pink"];
  const aleatoria = cores[Math.floor(Math.random() * cores.length)];
  caixa.style.background = aleatoria;
});

// EXTRA: esconder/mostrar caixa
toggle.addEventListener("click", () => {
  if (visivel) {
    caixa.style.display = "none";
    visivel = false;
  } else {
    caixa.style.display = "flex";
    visivel = true;
  }
});