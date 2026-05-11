const envelope = document.querySelector(".envelope");

let intervaloCoracoes;

/* ABRIR CARTA */
function abrirCarta() {

  envelope.classList.toggle("aberto");

  // ABRIR
  if (envelope.classList.contains("aberto")) {

    intervaloCoracoes =
      setInterval(criarCoracao, 300);
  }

  // FECHAR
  else {

    clearInterval(intervaloCoracoes);
  }
}

/* CORAÇÕES */
function criarCoracao() {

  const heart =
    document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "💖";

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {

    heart.remove();

  }, 5000);
}